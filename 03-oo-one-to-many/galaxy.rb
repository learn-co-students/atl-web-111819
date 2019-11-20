require 'pry'

class Galaxy
    attr_reader :name, :universe

    @@all = []

    def initialize(name, universe)
        @name = name
        @universe = universe # do we need this, or the other way around??? Clue 3.
        @@all << self
    end

    def self.all
        @@all
    end
end
