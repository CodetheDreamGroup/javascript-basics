[Class Video]()

## Outline
* Review
  * Object literal syntax
  * Object factory function
  * Object *constructor* with `new` operator
  * Object.create
  * Composition
  * Inheritance
* The object prototype



# Creating Objects

Lets review creating objects using the different approaches in JavaScript.

We will be creating the same object using each approach so that we are not focused the object properties each time, and can focus on the syntax instead.

Suprise...I am a nerd. OK. That probably isn't a suprise, but that isn't the point.

The point is that as a nerd I like to participate in typically nerdy hobbies like:
* Reading
* Discussing the merits of Star Wars vs Star Trek
* Playing RPG games

So, to appeal to my own nerdy hobbies, today we will be creating an object(s) to represent a *character* in an RPG game.

There are a lot of properties that could exist for an RPG character, but lets start with at least the following properties:

* Name
* Experience Points (xp)
* Level
* Class
* Strength
* Intelligence

## Object literal syntax

How would we create an object with these properties using object literal syntax.

## Object factory function
Frequently, you would want to create many objects that have the same properties, such as all of the characters needed for a party in an RPG.

We can do that using a *factory function* to create as many objects with the same properties as we want.

How would we create an object with these properties using object literal syntax.


## Object *constructor* with `new` operator
Last class we introduced the concept of a *constructor* function in JavaScript.

A *constructor* is a function that happens to be called with the `new` operator.

This will behave very similary to an object factory, in that we can create multiple objects of the same type easily, but they come with additional benefits that we will see eventually.

How would we create an object with these properties using object literal syntax.



Remember: Inside of a *constructor* function, you set properties on the object that will be created by using the `this` keyword to refer to the object.

## Object.create
The `Object.create()` method is another way to create objects in JavaScript. At first, this looks like it is just a more complicated method to create objects similar to *object literal* syntax.

How would we create an object with these properties using object literal syntax.


However, the `Object.create()` method can take additional parameters, one of which is another object to set as the prototype of the new object being created. We will use this in just a few minutes as we look at prototypes.


# Object relationships

## Composition
Objects are composed of other objects. We already had an example of this last week with the ice cream cone contain scoops of ice cream that were themselves objects.

Composing objects together allows us to represent complex compositions, while allowing each object to maintain its own properties that can be changed independently.


## Inheritance
Object can inherit behavor from other objects.

Inheritance allows for objects to share a common *interface*.


## The object prototype
All objects in JavaScript have a prototype. The prototype is also an object, or `null` for the lowest level object.

Every object inherits *properties* and *methods* from it's prototype. This inheritance allows for powerful reuse of code.

When JavaScript looks for a *property* of an object, it firsts looks on the object itself, and if it doesn't find it then it looks on the prototype of the object.

Revisiting our *character* object from before, we will set some methods on the prototype of the object so that all instances of the same object will inherit those properties.

## Setting methods on a prototype using a constructor function

Perhaps the easiest way to set properties and methods on a prototype is to use a constructor function.

An properties set inside the constructor function, like we did before, are properties of the object itself, but we can set properties on the prototype by setting them on the prototype of the function itself.

```javascript
function Character(name, role) {
  this.name = name;
  this.role = role;
  this.xp = 0;
  this.level = 1;
  this.strength = 10;
  this.intelligence = 10;
}

Character.prototype.greetings = function() {
  console.log(`My name is ${this.name}. I am a powerful ${this.role}.`);
}

Character.prototype.gainExperience = function(xp) {
  this.xp = this.xp + xp;

  if (this.xp > 1000) {
    this.level++;
    this.xp = this.xp - 1000;
    console.log(`Congratulations ${this.name}, you are now level ${this.level}`);
  }
}
```

## Using Object.create to set a prototype

We can set the prototype of a new object to an existing object using the `Object.create()` method by passing in the existing object as the first *argument*.

For example, if we have the following object.

```javascript
var character = {
  name: "John Doe",
  class: "farmer",
  xp: 0,
  level: 1,
  strength: 10,
  intelligence: 10,
  greetings: function() {
      console.log(`My name is ${this.name}. I am a happy ${this.class}`);
  }
}
```

We can use it as a prototype for additional characters like this:

```javascript
var oldMac = Object.create(character);
oldMac.greetings();

oldMac.name = "Old Macdonald";

oldMac.greetings();
```