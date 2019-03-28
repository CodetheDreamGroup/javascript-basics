---
author: Jared Siirila
title: Object Creation
---

## Outline
* Review
  * Built-in objects
  * methods
  * this
* Functions calling functions
* Objects continued
    * Bracket notation
    * Iterating over object properties
    * Factory functions
    * constructor functions


# Review

## Built-In Objects
There are a number of objects that are built into the JavaScript language already.

* String
* Number
* Boolean
* Object
* Function
* Array
* Date
* RegExp
* Error

## Methods

A method is just a function attached to an object.

## this

The *this* keyword is how you can access the properties of an object from within a method on the same object.

# New

## Functions calling functions (function composition)

Inside of a function you can call other functions to have them execute their code.

Using this pattern allows us to 

## Bracket Notation

Properties on objects can be accessed using another notation for providing the *key* known as *bracket notation*.

When using bracket notation, the expression inside the brackets is evaluated and the value from that is used as the key.

When using bracket notation the property name must ultimately be evaluated to a string.

```javascript
var scoop = {
  flavor: "mint chocolate chip"
};

console.log(scoop["flavor"]);

var property = "flavor";

var flavor = scoop[property];

console.log(flavor);
```

This syntax can be useful in many different situations, for example:

* If you don't know the name of the *key* when writing the program because it is provided at run time by the user
* When iterating over the properties in an object

## Iterating over object properties

We can get all of the *keys* on an object by using the `Object.keys()` method, which returns an array of all of the keys on an object.

Since we already know how to iterate over an array using a while loop, we can use this array to print all of the *keys* and *values* for an object.

```javascript
var album = {
  name: "Thriller",
  artist: "Michael Jackson",
  year: 1982,
  copiesSold: "65 million",
}

var keys = Object.keys(album);

while(keys.length > 0) {
  var key = keys.pop();
  var value = album[key];
  console.log(`${key}: ${value}`);
}
```

# Creating objects

There are a lot of different ways to create objects in JavaScript.

So far we have used the *object literal* syntax, sometimes also called an *object initializer*.

Today we will talk about a couple different other ways to create objects.

## Creating objects using a factory function

What if you want to create the same type of object over and over again.

An object with the same parameters and methods, but different values.

That is where a factory function can be useful.

A factory function is just a function that takes in some values and returns a new object based on those values.

Get it...its like a manufacturing factory that takes in some parts and produces a new car, computer, etc.

Example

```javascript
function carFactory(make, model, year) {
    return {
        make: make,
        model: model,
        year: year
    };
}
```

The factory function just takes in some values and then creates and returns an object literal based on those values.

It might do some additional logic to set extra values on the object as well.

Another example, written a little differently.

```javascript
function personFactory(name, age) {
  var person = {};
  person.name = name;
  person.age = age;
  person.sayHi = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
  }

  return person;
}

var john = personFactory("John", 24);
var sarah = personFactory("Sarah", 21);

john.sayHi();
sarah.sayHi();
```


## Creating objects with the `new` keyword

Another common way to create objects is using the `new` keyword and calling a special type of function called a *constructor*.

The simplest way to do this is to call the `Object` constructor using the `new` keyword

```javascript
var scoop = new Object();

scoop.flavor = "vanilla";

console.log(scoop.flavor);
```

## Object *constructor* with `new` operator
In JavaScript, a *constructor* is just a function that happens to be called with the `new` operator.

These behave very similary to an object factory, but don't require creating an object literal and returning it.

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.sayHi = function() {
    console.log(`Hi, my name is ${this.name} and I am ${this.age} years old`);
  }
}

var john = new Person("John", 24);
var sarah = new Person("Sarah", 21);

john.sayHi();
sarah.sayHi();
```

Inside of a *constructor* function, you set properties on the object that will be created by using the `this` keyword to refer to the object.
