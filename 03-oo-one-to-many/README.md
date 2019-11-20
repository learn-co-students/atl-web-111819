# Ruby One-To-Many Relationships

This week we're going to be talking about how to use data to create rich relationships between data in your Ruby programs.

In this lecture, we're going to establish a one-to many relationship between classes and use that relationship to complete a set of deliverables.

## SWBATs

- Review what we learned about OO Ruby
- Pseudo-code a one object to many objects relationship 
    - one object has many objects 
    - one object belongs to another object
- Practice passing custom objects as arguments to methods 
- Demonstrate single source of truth 
- Infer type of method (class or instance) through naming convention


## OO Ruby So Far

### Concept Review
Let's reinforce some of the things we went over yesterday. 

Objects: 

=> all of the data and behaviors needed to accomplish or complete a task.

Classes: 

=> a blueprint or factory that represents an idea of a real life thing. 

attr_accessor: 

=> Used within classes to represent attributes of the class. 

Example: 

```rb
class School 
    attr_accessor :name 

    def initialize(name)
        @name = name
    end
end

class Student
    attr_accessor :name, :age

    def initialize(name, age)
        @name = name
        @age = age
    end
end

school1 = School.new("Flatiron")
student1 = Student.new("Lyn", "35")
```

## New Definitions to Note 

- Model: a class whose primary responsibility is to store data. 

- Domain: the subject matter of the 'problem' you're looking to solve.

- Single Source of Truth: idea that a name is defined once, and when referenced it changes when main def is changed.

- Relationships: how the models (classes) are connected to each other

- One-to-Many Relationship: A relationship describing a single model that contains or keeps track of other models


### Knowledge Check 

Let's talk about examples of models, domains, relationships, and a one-to-many relationship. Using [AWW](https://awwapp.com/#), let's pseudocode out some relationships. 

- One to many relationship examples: 

    - Universe and Galaxy
    - State and Counties
    - Earth to Continents
    - Make to Model (this one is not pure- why?)


## Building a One-To-Many Relationship

In order to build out a relationship, it's good to pseudocode and talk through how the models will connect.

Before you touch code, write down your relationship and understand how your models will work with each other.

### Working Through Deliverables

Often times you'll get a set of deliverables that you need to work through in order to complete a task. Take each step by step, paying attention to the relationship you're building and how your models are built around the domain you're working under.

### Deliverables 

Pseudocode the logic out first! 

- Create an instance method called 'name', that allows us to see both a galaxy and universe's name. 

=> create a galaxy class. create a universe class. create an `attr_reader` to use `name` attribute as a method.

- Create an instance method called 'size' for universe that allows us to see a universe's size.

=> create a size attribute for universe and an `attr_reader` for the size of a universe attribute.

- Create a method that allows us to see all of the galaxies we've created.

=> we will probably need to reference Self to get ALL (.all) of the galaxies

- Create a method called `what_universe` that gives us the name of the universe that a galaxy belongs to. 

Finish this deliverable as a CHALLENGE! 

=> create method `what_universe`
=> get all of the galaxies in the universe (maybe using self?)
=> return the name of the universe that the galaxy belongs to



