class Chronicle
  include Mongoid::Document
  field :dynasty, type: String
  field :started_in, type: Integer
  field :file, type: String, default: ''
  field :available, type: Boolean, default: false

  embeds_many :events

  scope :available, -> { where( available: true ) }

  def process_file!( connection_token )
    # Break the file into a set of non-empty lines
    lines, year = file.split("\r\n").reject {|l| l =~ /\A\z/}, nil

    # Update client with how many lines of the file need to be processed...
    ChronicleChannel.notify( connection_token, :process_start, lines.count )

    # For each line, determine whether it describes a new year or a new event.
    lines.each_with_index do |l, i|
      if l =~ /^- ([\d]{3,4}) -$/
        year = $~[1]
      else
        events.new( year: year, text: l )
      end
      if i % 10 == 0 # Slight throttling mechanism. hacky.
        ChronicleChannel.notify( connection_token, :process_progress, i.to_f / lines.count )
      end
    end

    # Update the chronicle's primary data based off of the first event.
    self.dynasty = events.first.text.match(/Chronicle of House ([^,\s]+)/)[1]
    self.started_in = events.first.year
    self.available = true

    # Persist, and let the client know the processing is complete
    save!

    ChronicleChannel.notify( connection_token, :process_success )
  rescue => e
    ChronicleChannel.notify( connection_token, :process_failure, e.message )
  end
end
