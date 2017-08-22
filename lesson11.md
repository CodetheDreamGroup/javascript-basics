[Class Video]()

## Outline
* Review
  * Recursion
  * Objects
* Creating Objects
  * Object literal syntax
  * Object factory function
  * Object *constructor* with `new` operator
  * `Object.create`
  * `class` keyword
* Object relationships
  * Composition
  * Inheritance



## Recursion
What is recursion?



A recursive function is a function that calls itself.


# Objects and Object Oriented Programming

An *object* is an entity that has *properties*.

An object *encapsulates* *state* and *function* in its *properties*.

State - Characteristics of an object

Function - Behavior of the object. Methods (functions) that can be performed with the object.


# Creating Objects
There are many different ways to create objects in JavaScript.

We will briefly talk about 4 of them so that you are familiar with them, but then focus on just a couple for the rest of the class.

[OOP Intro on Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS)

[Object creation overview on Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)


## Object literal syntax

By now you should be familiar with creating objects using object literal syntax

```javascript
var person = {
  name: "Micah",
  age: 35,
}

console.log(person.name);
```

## Object factory function
This is similar to the object literal syntax, but the object creation is wrapped inside a function call so multiple objects with the same properties can be created easily.

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

## `Object.create`
This will create a new object with no properties if it isn't passed any arguments.

This method will be much more useful when we start talking about inheritance.

```javascript
var person = Object.create({});
person.name = "Agnes";
person.age = 99;

console.log(person.name);
```

## `class` keyword

I am not going to introduce this method of creating objects in class since it is pretty new to JavaScript and can cause confusion between it and other object oriented languages when first learning.

# Object relationships

## Composition
Objects are composed of other objects. We already had an example of this last week with the ice cream cone contain scoops of ice cream that were themselves objects.

Composing objects together allows us to represent complex compositions, while allowing each object to maintain its own properties that can be changed independently.


## Inheritance
Object can inherit behavor from other objects.

Inheritance allows for objects to share a common *interface*.

