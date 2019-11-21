require 'pry'

class Example
    attr_accessor :attr_one, :attr_two, :array_attr
    @@all = []

    def initialize(attr_one, attr_two)
        @attr_one = attr_one
        @attr_two = attr_two
        @array_attr = []
        @@all << self
    end

    def self.all
        @@all
    end

end