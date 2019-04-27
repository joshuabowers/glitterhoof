class Event
  include Mongoid::Document
  field :year, type: Integer
  field :text, type: String
  field :category, type: Symbol

  embedded_in :chronicle

  before_save :categorize

  private

  def categorize
    return if category
    self.category =
      case text
      when /through deeds and character/i
        :nicknamed
      when /went to war/i
        :war_declaration
      when /won the war/i
        :war_won
      when /victorious in the battle/i
        :battle_victory
      when /defeated in the battle/i
        :battle_defeat
      when /created the title/i
        :title_created
      when /died under suspicious circumstances/i
        :assassination
      when /died (a|of)/i
        :death
      when /married/i
        :marriage
      when /strange and wonderful serpents/i
        :serpents
      when /dragon/i
        :dragon
      end
  end
end
