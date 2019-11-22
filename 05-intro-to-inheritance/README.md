# Intro to Inheritance

Today we're going to chat briefly about inheritance in Ruby and how to extend class functionality using inheritance.


## SWBATs 

- Define inheritance
- Understand how inheritance is used in Ruby
- Work through an example of inheritance to see its use in action


## What is Inheritance? 

Inheritance allows us to extend the functionality of one class into other classes. Within the concept of inheritance, typically we create: 

=> Parent Class (also called the base class or super class): Holds all the base attributes and information for other associated classes. 

=> Child Class (also called the subclass or derived class): Holds both the base attributes from the parent class as well as new attributes specific to that class.

**For instance, what's going on here?**

![Ruby Inheritance Diagram](https://d2aw5xe2jldque.cloudfront.net/books/ruby/images/animal_hierarchy.jpg)

- In this diagram, animal is the super class from which fish and mammal inherit. Mammal is a subclass for animal, but a super class for cat and dog, types of animals (with information inherited from all animals and mammals) that carry their own attributes as well.


So inheritance allows us to take all of the goodness from one class and use it for other subclasses. How is this implemented in Ruby? 



## Understanding how inheritance is used in Ruby

Often times in Ruby we create hierarchical classes that need content from a previous class to run, as well as perform new methods specific to that class. 

We use inheritance to keep our code DRY, legible, and consistent.

- What are some implementations of inheritance in real life that you can think of? 

=> Vehicles is the parent, cars, motorcycles, planes, etc are subclasses



## Using inheritance in an example

Flip on over to `restaurant.rb` for to see a working example of inheritance.

After this simple example, let's build out another on `animal.rb` from scratch.



