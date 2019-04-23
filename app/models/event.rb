class Event
  include Mongoid::Document
  field :year, type: Integer
  field :text, type: String
  field :category, type: Symbol

  embedded_in :chronicle
end
