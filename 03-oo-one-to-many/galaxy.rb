
class Galaxy
    attr_accessor :name
    attr_reader :universe

    @@all = []

    def initialize(name, universe)
        @name = name
        @universe = universe
        @@all << self
    end

    def self.all
        @@all
    end

end
