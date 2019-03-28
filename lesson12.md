---
author: Jared Siirila
title: Object Prototypes
---

## Outline
* Review
  * Bracket notation & iterating on object properties
  * Factory functions
  * constructor functions
* Array foreach method
* Objects
  * Object.create
  * Composition
  * Inheritance
  * The object prototype

---

## Bracket notation & iterating over object properties

--

```javascript
var album = {
  name: "Pet Sounds",
  artist: "The Beach Boys",
  year: 1966,
  notes: "Considered the 2nd best album of all time by Rolling Stones Magazine"
};
```

How can we iterate over the properties of this object dynamically and print the value of each property?

--

To get the *keys* of an object use the `Object.keys` method of the Object object (that is confusing to read)

--

```javascript
var keys = Object.keys(album);

for (var index = 0; index < keys.length; index++) {
  console.log(`The key name is ${keys[index]}`);
}
```

--

So then how do I use these keys to read the properties of the object?

--

```javascript
var keys = Object.keys(album);

for (var index = 0; index < keys.length; index++) {
  var propertyName = keys[index];
  var propertyValue = album[propertyName];
  console.log(`${propertyName}: ${propertyValue}`);
}
```

---

## forEach method on arrays

--

This seems like a good time to introduce the `forEach` method on arrays

--

The `forEach` method is another way to iterate over the values in an array

--

It is nice because it hides all of the details of how to iterate over the array so you can focus on what you want to do for each iteration

--

Using it can increase the readability of your code

--

The `forEach` method takes a `function` as an argument and calls that function for each item in the array passing in the item value as a parameter

--

This is a little tricky to understand at first, but is a very powerful concept.

--

```javascript
var album = {
  name: "Pet Sounds",
  artist: "The Beach Boys",
  year: 1966,
  notes: "Considered the 2nd best album of all time by Rolling Stones Magazine"
};

var keys = Object.keys(album);

function printItem(key) {
  var value = album[key];
  console.log(`${key}: ${value}`);
}

keys.forEach(printItem);
```

---

# Creating Objects

--

Lets review creating objects using the different approaches in JavaScript.

--

We will be creating the same object using each approach

That way we can focus on the syntax of each approach instead of the properties

--

Suprise...I am a nerd

OK. That probably isn't a suprise, but that isn't the point
<!-- .element: class="fragment" -->

--

The point is that as a nerd I like to participate in typically nerdy hobbies like:
* Reading
* Debating what is going to happen in Avengers: Endgame
* Playing RPG games

--

So, to appeal to my own nerdy hobbies, today we will be creating a objects to represent a *character* in an RPG game

--

There are many potential RPG character properties  
Lets start with the following properties

* Name
* Experience Points (xp)
* Level
* Class
* Strength
* Intelligence

---

## Object literal syntax

Create an object with these properties using object literal syntax

---

## Object factory function

Create an object with these same properties using an object factory function

Remember: An object factory function is just a function that returns an object of the type expected

---

## Object *constructor*

Last class we introduced the *constructor* functions

A *constructor* is a function that is called with the `new` operator

By convention a constructor function name starts with a capital letter

Remember: Inside of a *constructor* function, you set properties on the object that will be created by using the `this` keyword to refer to the object.

---

## Object.create

--

The `Object.create()` method is another way to create objects in JavaScript.  

--

At first, this looks like it is just a more complicated method to create objects similar to *object literal* syntax.

--

However, the `Object.create()` method can take additional parameters, one of which is another object to set as the *prototype* of the new object being created.

We will use this in just a few minutes as we look at prototypes.

---

# Object relationships

---

## Composition  

Objects can be composed of other objects.

--

For example in the last class our Person object had an instance of a Vehicle object

--

Composing objects together allows us to represent complex objects, while allowing each object to maintain its own properties that can be changed independently.

---

## Inheritance

--

Object can inherit properties (state and behavior) from other objects

--

Inheritance allows for objects to share a common *interface*

--

Inheritance reduces code duplication by allowing you to reuse existing code

--

In JavaScript object inheritance is achieved by use of the *object prototype*

---

## The object prototype

--

All objects in JavaScript have a prototype

--

The prototype of an object is either another object or *null*

--

Every object inherits *properties* (state) and *methods* (behavior) from it's prototype

This inheritance allows for powerful reuse of code

--

When JavaScript looks for a *property* of an object, it firsts looks on the object itself, and if it doesn't find it then it looks on the prototype of the object.

--

Revisiting our *character* object from before, we will set some methods on the prototype of the object so that all instances of the same object will inherit those properties.

---

## Setting methods on a prototype using a constructor function

--

Perhaps the easiest way to set properties and methods on a prototype is to use a constructor function.

Any properties set inside the constructor function, like we did before, are properties of the object itself, but we can set properties on the prototype by setting them on the prototype of the function itself.

--

```javascript
function Character(name, role) {
  this.name = name;
  this.role = role;
  this.xp = 0;
  this.level = 1;
  this.strength = 10;
  this.intelligence = 10;
}
```

--

```javascript
Character.prototype.greetings = function() {
  console.log(`My name is ${this.name}. I am a powerful ${this.role}.`);
}
```

--

```javascript
Character.prototype.gainExperience = function(xp) {
  this.xp = this.xp + xp;

  if (this.xp > (1000 * this.level)) {
    this.level++;
    this.xp = this.xp - (1000 * this.level);
    console.log(`Congratulations ${this.name}, you are now level ${this.level}`);
  } else {
    console.log(`You are ${(1000 * level) - this.xp} experience points away from level ${this.level + 1}`);
  }
}
```

---

## Using Object.create to set a prototype

--

We can set the prototype of a new object to an existing object using the `Object.create()` method by passing in the existing object as the first *argument*.

--

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

--

We can use it as a prototype for additional characters like this:

```javascript
var oldMac = Object.create(character);
oldMac.greetings();

oldMac.name = "Old Macdonald";

oldMac.greetings();
```

<!--
# Etc

## Recursion
We learned about recursion and recursive functions in the last class.

A recursive function is a function that calls itself.

To ensure that a recursive function eventually exits it needs to have a base case that doesn't call itself.

A standard example of a recursive function is calculating Fibonacci numbers.

Fibonacci numbers are a set of numbers that start with a one or zero and then each number in the sequence is the sum of the two previous numbers.

For example, an array of fibonacci numbers starting at fibonacci(0) and giving the first 8 Fibonacci numbers is:

`[0, 1, 1, 2, 3, 5, 8, 13]`

We can write the function for finding a fibonacci number as a mathematical equation like this:

fibonacci(x) = fibonacci(x-1) + fibonacci(x-2)

That looks suspiciously like a formula that could be easily written using a recursive function.

![It's a trap](https://s-media-cache-ak0.pinimg.com/originals/8d/fc/45/8dfc45ebe3a41192f8722233ba07e63a.jpg)

Let's write a recursive function to compute any fibonacci number.




## forEach method on arrays

This seems like a good time to introduce the `forEach` method on arrays. The `forEach` method is another way to iterate over the values in an array.

The `forEach` method takes a `function` as an argument and calls that function for each item in the array passing in the item value as a parameter. This is a little tricky to understand at first, but is a very powerful concept.

```javascript
var album = {
  name: "Thriller",
  artist: "Michael Jackson",
  year: 1982,
  copiesSold: "65 million",
}

var keys = Object.keys(album);

function printItem(key) {
  var value = album[key];
  console.log(`${key}: ${value}`);
}

keys.forEach(printItem);
```

-->