
class Universe
    
    attr_accessor :name, :size
    
    @@all = []

    def initialize(name, size) 
        @name = name
        @size = size
        @@all << self
    end

    def self.all
        @@all
    end

    def what_galaxy # solution- what galaxies does a universe own? a UNIVERSE HAS MANY GALAXIES, GALAXIES BELONG TO UNIVERSE.
        Galaxy.all.select do |galaxy|
            galaxy.universe == self
        end
    end

end
 