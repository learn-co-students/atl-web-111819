# Intro to OO
Today we are going to dig into the object-oriented world of Ruby. Get ready for a lot of content and a lot of practice! Use your labs to reinforce your knowledge.

## SWBATS
- Define object in programming domain
- Explain the concept of sending messages
- Create a class and instantiate an instance of the class
- Explain the difference between a class and an instance
- Pass arguments to new by defining an initialize method in class
- Create instance methods
- Define and practice attribute readers and writers using attr_ macros

## What is object-oriented programming? 

Object-oriented programming is a type of programming based on the concept of objects containing data, which have fields (attributes/properties) and can be operated on (through methods).

## What is an object? 

Objects are abstractions. If I draw a star on the board, is that picture of a star an actual star? Nope! It's a representation of a real life object in picture form. Similarly, objects have no physical form- they're abstractions that contain data representing the idea of a thing we create.

[This is not a shooting star.](https://media.giphy.com/media/3og0IMJcSI8p6hYQXS/giphy.gif)

Objects in code are the things that include all the logic and data required to complete a task.

## How do objects send messages? 

Objects send messages via dot notation. Using dot notation, we ask objects to perform a task by evoking a method on the object we call. The object is then the receiver, the method is the message. 

In plain English, here's a object being evoked: 

```rb
class Person
attr_accessor :title
end

lyn = Person.new()
lyn.title = "Instructor"

lyn.title #=>"Instructor" 
```

lyn is a new person. A Person has a title attribute. Give lyn a title of instructor. For lyn, give me her title.


## What is a class? How do we create an instance of a class? 

A class is a data type that YOU can define. We know about other Ruby types (strings, booleans, integers, etc.), but can we use those to define a person? A phone? No! We use classes to represent an abstraction of a real-world thing- anything you want to create can be made into a custom data type, a class. 

### How do I create an instance of this custom data type? 

In my infinite powers of creation, when I create a crystal class in this example, I can magically create different crystals through instances. With a class, I'm creating a blueprint of what I want a crystal to have, or how I will categorize it. 


#### Instantiating- what does this mean, really? 

To bring a new object to life. When you use the `.new` method, you're creating a new object that uses the blueprint (`class`) that you've created to create a new singular occurrance. 

To create an instance of a crystal (or instantiate a crystal), I'd use: 

```rb
rose_quartz = Crystal.new()
```

Check out `crystal.rb` for a practical example of a class and an instance of a class.

## What's the difference between a class and an instance? 

=> The class is a blueprint, instance is object that follows the blueprint.


## How do I create instance methods? 

We can create our own methods to use within a class, that become behaviors that the class can do. When I create a new instance of an object under a certain class, I can use the methods I've defined for that class to have my new object perform different behaviors. 

In the case of our crystals, let's create a set of instance methods that can be used to perform a behavior on new crystals.


## What are getters and setters? How do I use the attr_ macros? 

When I create a class statement, I can give my class a set of attributes that each instance of that class should have. In the example of my crystals, each of them should have a certain type, color, and rarity. 

I can use these variables in different instances. This is how! 

### How do I initialize a class? What can I do with that? 

Ruby objects have public methods, but private data. Using a method, we can make the data public. We use initialize to do this and can initialize a class by creating an initialize method and passing arguments to new. 

for example: 

``` rb
class Crystal 
    def initialize(type)
        @type = type # a variable!!
    end

    def type
        @type
    end
end

rose_quartz = Crystal.new("quartz")
puts rose_quartz.type 
```

We need to make `type` publicly available so that we can read the data. Let's try this out in IRB to see this GETTER METHOD in action. 

If I wanted to change the data instead of just reading it, I'd need to again make the data public, then write data. To define a SETTER METHOD, I'd add `=` after the name.

### attr_ all the things

To make our data public, we create getters and setters. To make that process easier, we create attr_ methods. 

`attr_reader` allows you to shorten code to get all of the methods you've initialized and read them publicly. 

`attr_writer` allows you to write on the data that you've shared publicly.


 

