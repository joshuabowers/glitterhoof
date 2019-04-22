class Chronicle
  include Mongoid::Document
  field :dynasty, type: String
  field :started_on, type: Date
  field :file, type: String, default: ''
  field :available, type: Boolean, default: false

  scope :available, -> { where( available: true ) }

  def process_file

  end
end
