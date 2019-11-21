class RecipeIngredient
    attr_accessor :recipe, :ingredient, :tasty
    @@all = []

    def initialize(recipe, ingredient, tasty=true)
        @recipe = recipe
        @ingredient = ingredient
        @tasty = tasty
        @@all << self
    end

    def self.all
        @@all
    end

end