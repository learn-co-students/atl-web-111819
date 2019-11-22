require 'pry'

# Deliverables: 
#  - Create an animal model who has a type/species 
#    classification and holds all animals
#  - Create a mammal model, as a type of animal subspecies
#  - Create two mammals, a dog and cat, and give 
#    them instance methods
#  - Test, creating different instances of each using Pry

class Animal 
    attr_accessor :type

    @@all = []

    def initialize(type)
        @type = type
        @@all << self
    end

    def self.all
        @@all
    end
end

class Mammal < Animal
    puts "I'm warm blooded."  
end

class Dog < Mammal
    
    def bark 
        puts "woof!"
    end
end

class Cat < Mammal

    def meow
        puts "meowwwww!"
    end
end



binding.pry