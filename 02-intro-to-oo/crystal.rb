require 'pry'

# Lyn is a big fan of collecting, sorting, and using crystals. 
# We're going to create a class to hold Lyn's various collections 
# of crystals and share them with friends. 

class Crystal
    def initialize(type)
        @type = type # a variable!!
    end  

    def type
        @type
    end
end


# instantiate a new crystal with a type 
ruby = Crystal.new("quartz")

binding.pry