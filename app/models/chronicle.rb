class Chronicle
  include Mongoid::Document
  field :dynasty, type: String
  field :started_on, type: Date
end
