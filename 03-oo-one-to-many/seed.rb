require 'pry'
require_relative './galaxy' #tells Ruby to check out another file we own
require_relative './universe'

marvel = Universe.new("Marvel", "supermassive")
dc = Universe.new("DC", "miniscule")

milkyway = Galaxy.new("Milky Way","marvel")
andromeda = Galaxy.new("Andromeda", "dc")
catseye = Galaxy.new("Cat's Eye", "dc")

def what_galaxy
    #look through all of the galaxies and check the universe value 
    Universe.all.select do |universe|
        universe.galaxy == self
    end
    #return only galaxies within universe asked for
end

# should this method exist in seed? Clue 1. 

Pry.start # runs Pry immediately