require 'pry'

class Universe

    # can we connect this to galaxies in any way? @@all???? Clue 2. 
    attr_reader :name, :size 

    def initialize(name, size)
        @name = name
        @size = size
    end
end
 