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
      when /(went to war)|(was attacked by)/i
        :war_declaration
      when /won the war/i
        :war_won
      when /made peace with/i
        :made_peace
      when /host/i
        :host
      when /supported/i
        :supported_ally
      when /victorious in the battle/i
        :battle_victory
      when /defeated in the battle/i
        :battle_defeat
      when /captured|(lost (\w+) to the forces)|(taking (.+) from the enemy)/i
        :captured
      when /created the title/i
        :title_created
      when /died under suspicious circumstances/i
        :assassination
      when /murder/i
        :murder
      when /married/i
        :marriage
      when /divorce/i
        :divorce
      when /hermetic society/i
        :alchemy
      when /hajj|pilgrimage/i
        :pilgrimage
      when /skill at arms/i
        :tournament
      when /usurped/i
        :usurped
      when /succeeded to the throne/i
        :succession
      when /crusade|jihad|great holy war/i
        :great_holy_war
      when /was born to/i
        :baby
      when /executed/i
        :execution
      when /imprisoned/i
        :imprisoned
      when /aztec|(strangers in strange ships)/i
        :sunset_invasion
      when /bountiful harvest/i
        :harvest
      when /blood raining/i
        :blood
      when /heresy|converted/i
        :heresy
      when /culture/i
        :culture
      when /revolt|uprising/i
        :revolt
      when /rebellion|(lost the war against)/i
        :rebellion
      when /strange and wonderful serpents/i
        :serpents
      when /dragon/i
        :dragon
      when /goat/i
        :goat
      when /crows birds/i
        :crow
      when /star fell/i
        :star_fall
      when /two suns/i
        :hallucination
      when /wild rabbits/i
        :rabbit
      when /plague/i
        :reaper
      when /died bedridden/i
        :bedridden
      when /died (a|of|from|frothing)/i
        :death
      when /giant destroyed/i
        :giant
      when /river flooded/i
        :flood
      when /celebrated/i
        :celebration
      when /tall woman/i
        :witch
      when /dancing on the moon/i
        :moon
      when /chronicle of house/i
        :chronicle
      end
  end
end
