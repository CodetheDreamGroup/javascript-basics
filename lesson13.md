---
author: Jared Siirila
title: Object Prototypes
---

## Outline
* Review
  * Array foreach method
  * Object composition and inheritance
  * Object.create
* Object prototypes
  * The object prototype

---

## forEach method on arrays

--

```javascript
var cart = [
    { price: 4.99, taxRate: 0.05 },
    { price: 0.99, taxRate: 0.08 },
    { price: 9.95, taxRate: 0.00 },
    { price: 7.43, taxRate: 0.05 }
];

function computeCartTotal(cart) {
    var total = 0;
    function addToTotal(item) {
        var itemPrice = item.price + item.price * item.taxRate;
        total = total + itemPrice;
    }

    cart.forEach(addToTotal);

    return total;
}

var cartTotal = computeCartTotal(cart);

console.log(`The total price of your shopping cart is : ${cartTotal}`);
```

---

# Object composition and inheritance

--

Objects can be composed of other objects.


Object can inherit properties (state and behavior) from other objects

---

## Object.create

--

The `Object.create()` method is another way to create objects in JavaScript.  

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
-->