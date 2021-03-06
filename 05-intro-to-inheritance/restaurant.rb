require 'pry'

class Chef 
    def make_a_salad
        puts "Rabbit food, on the way!"
    end

    def make_an_omelette
        puts "Omelette du fromage?"
    end

    def make_mashed_potatoes
        puts "Whippin' up these taters!"
    end

    def make_a_sandwich
        puts "Sandwich- want hots with that?"
    end

    def make_a_pie
        puts "Sweet potato pie, not pumpkin pie."
    end
end


# For the specialized chefs, let's create dishes that 
# they can provide in addition to the general meals 
# that all chefs can cook. We'll override some 
# original methods from the Chef class for use 
# in our special chef classes. 


class SouthernChef < Chef
    def pecan_pie
        puts "You'll love my pecan pie."
    end
        
end


# Can we link subclasses? Let's try it out.

class SoulFoodChef < SouthernChef
    def collard_greens
        puts "I put my FOOT in these greens!"
    end
end




# Ok, let's initialize and call some of the methods 
# we created to see them in action! 




binding.pry
puts 'Thanks for dining at Flatiron Cafe!'
