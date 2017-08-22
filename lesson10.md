[Class Video]()

## Outline
* Review
  * Recursion
  * Objects
  * Types review
* Example complex program
* Objects continued



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

## Review Types

- number
- string
- boolean
- null
- undefined
- function
- object


## Objects review
List the properties and behavior of the object you chose to describe.


# Objects and Object Oriented Programming

An *object* is an entity that has *properties*.

An object *encapsulates* *state* and *function* in its *properties*.

State - Characteristics of an object

Function - Behavior of the object. Methods (functions) that can be performed with the object.

## Object literals

Creating objects using object literal syntax

```javascript
var cone = {
  type: "waffle",
  scoops: [],
  getDescription: function() {

    return `You ordered a ${this.type} of cone with scoop(s) of ${this.scoops}`;
  },
}

console.log(cone.getDescription());

cone.scoops.push("vanilla");
cone.scoops.push("chocolate");

console.log(cone.getDescription());
```

## Object Uniqueness

```javascript
var scoop = {
  flavor: "vanilla",
  toString: function() {
    return this.flavor;
  },
};

var cone = {
  type: "waffle",
  scoops: [],
  getDescription: function() {

    return `You ordered a ${this.type} of cone with scoop(s) of ${this.scoops}`;
  },
}

console.log(cone.getDescription());

cone.scoops.push(scoop);
cone.scoops.push(scoop);

console.log(cone.getDescription());

scoop.flavor = "chocolate";

console.log(cone.getDescription());
```


## Bracket Notation

Properties on objects can be accessed using another notation for providing the *key* known as *bracket notation*.

When using bracket notation, the expression inside the brackets is evaluated and the value from that is used as the key.

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

## Creating objects with the `new` keyword

So far we have created objects using the *object literal* syntax.

There are a couple other ways to create objects, and one of them is using the `new` keyword and calling a special type of function called a *constructor*.

The simplest way to do this is to call the `Object` constructor using the `new` keyword

```javascript
var scoop = new Object();

scoop.flavor = "vanilla";

console.log(scoop.flavor);
```

## Built-In Objects
There are a number of objects that are built into the JavaScript language already.

Many of these objects are related to a primitive *type* in JavaScript. The reason for the object is to provide additional properties and methods to work with that type of data. JavaScript can implicitly convert between the primitive type and the object type when working with data of these types.

* String
* Number
* Boolean
* Object
* Function
* Array
* Date
* RegExp
* Error

For example, the `String` object adds a bunch of useful methods for working with strings, such as `toLowerCase`.
