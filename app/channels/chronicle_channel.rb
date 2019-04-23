class ChronicleChannel < ApplicationCable::Channel
  def subscribed
    stream_from stream_name
  end

  def unsubscribed
  end

  def receive(data)
    validate_request = data['type'].match(/\A#{ REDUX_PREFIX }(.+)\Z/)
    method = validate_request && validate_request[1].downcase
    send( method, data['payload'] ) if method && respond_to?( method )
  end

  # Initializes a chronicle file upload request: creates a database record
  # for storing the uploaded file for later processing. Notifies client
  # upon success to start the upload.
  def upload_start( payload )
    @chronicle = Chronicle.create

    notify( :begin_transfer )
  end

  # Receives a chunk of the uploaded chronicle file, appending it to the
  # appropriate database record. Notifies client upon success to trigger
  # sending the next chunk.
  def transfer( payload )
    @chronicle.file += payload
    @chronicle.save!

    notify( :transfer_success, payload.length )
  rescue => e
    notify( :transfer_failure, e.message )
  end

  # Invoked by the client to signal uploading complete. After this, self can
  # begin processing the file stored within the database to generate the
  # usable chronicle.
  def upload_finalize( payload )
    notify( :finished_upload )

    @chronicle.process_file!( connection_token )
  end

  def self.notify( connection_token, action, payload = nil )
    operation = {
      type: :"#{ REDUX_PREFIX }#{ action.upcase }"
    }
    operation[:payload] = payload if payload
    self.broadcast_to( connection_token, operation )
  end

  private

  REDUX_PREFIX = :CHRONICLE_

  def stream_name
    @stream_name ||= "chronicle:#{ connection_token }"
  end

  def connection_token
    @connection_token ||= SecureRandom.hex(36)
  end

  def notify( action, payload = nil )
    self.class.notify( connection_token, action, payload )
  end
end
