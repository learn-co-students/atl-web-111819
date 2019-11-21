require 'pry'
require 'faker'

class Ingredient
    attr_accessor :name, :measurement, :recipes
    @@all = []

    def initialize(name, measurement)
        @name = name
        @measurement = measurement
        @@all << self
    end

    def self.all
        @@all
    end

    # add the relationship for recipe and ingredient here by simply reversing the instance methods in recipe

end



5.times do
    Ingredient.new(Faker::Food.ingredient, Faker::Food.measurement)
end