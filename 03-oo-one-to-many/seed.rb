require_relative './galaxy'
require_relative './universe'

require 'pry'

marvel = Universe.new("Marvel", "supermassive")
dc = Universe.new("DC", "miniscule")

milkyway = Galaxy.new("Milky Way", "marvel")
andromeda = Galaxy.new("Andromeda", "dc")
catseye = Galaxy.new("Cat's Eye", "dc")

binding.pry