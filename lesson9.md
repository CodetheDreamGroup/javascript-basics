[Class Video]()

## Outline
* Recursion
* Objects and Object Oriented Programming (OOP)
  * Overview
  * Example
  * Objects in JavaScript
  * References and Instances
  * Adding a Method


# Recursion

## The call came from inside the ~~house~~ function

We have already seen that we can call a function from inside another function, such as:

```javascript
function add(a, b) {
  return a + b;
}

function prod(a, b) {
  return a * b;
}

function equation(a, b) {
  var c = add(a, b);
  var d = prod(a, b);
  return c + d;
}

console.log(equation(2,3));
```

But you you can also call a function from inside itself.

For example:

```javascript
function factorial(n) {
  if (n === 1) {
    return 1;
  } else {
    return n * factorial(n-1);
  }
}

console.log(factorial(5));
```

This is called *recursion* and it can be shown mathematically that anything that can be done with loops can be done with recursion. 

For example:

```javascript
function sumLoop(numbers) {
  var total = 0;
  var index = 0;
  while(index < numbers.length) {
    total = total + numbers[index];
    index++;
  }

  return total;
}

function sumRecursive(numbers) {
  var item = numbers.pop();

  if (numbers.length === 0) {
    return item;
  } else {
    return item + sumRecursive(numbers);
  }
}
```

There is a side effect from running sum recursive that might not be immediately obvious.

Can you spot it?

Remember what happens when a value is passed by reference (any changes to it modify what all references see).


# Objects and Object Oriented Programming

![Objects Everywhere](https://i.imgflip.com/1jfg8c.jpg)

An *object* is an entity that has *properties*.

An object *encapsulates* *state* and *function* in its *properties*.

State - Characteristics of an object

Function - Behavior of the object. Methods (functions) that can be performed with the object.

## Object Example

We have encountered many objects already in our classes.

Some of the objects that we have used include:
* The `Math` object
* The `console` object
* The `Array` object


## Creating Objects

There are several ways to create objects in JavaScript, but we will start with the simplest form *object literal* syntax.

```javascript
var car = {};  // Creates an object without any properties

```

## Object properties

A JavaScript object is a `type` that has properties. Each property is a key/value pair. The key is the *property name*.

The *value* of a property can be any *type*, such as a number, string, array, function, etc.

When a property is a function it is called a *method*.

Basically, whenever referring to a function called on an object it is referred to as a *method* of that object. For example, we have frequently called the `log` method of the `console` object.

## Setting and accessing object properties

Using the same *object literal* syntax, we can set properties on an object when it is created.

To set a property using object literal syntax, you put the property name or *key* on the left side followed by a colon,
then the right side is the property *value* (hence key/value pair). Each key/value pair is followed by a comma, just like each item in an array is followed by a comma.

You access a property on an object using *dot notation*, where you type the name of the object followed by a dot and the name of the property to access.

```javascript
var car = {
    color: "red",
    type: "sedan",
    brand: "Nissan"
};

console.log(car.color); // red
console.log(car.brand);  //Nissan

console.log(typeof car);
```

## Object-Oriented Programming
Object-oriented programming (OOP for short) is a way to write programs using objects. When using OOP, you write, create, and modify objects, and the objects make up your program.

OOP changes the way a program is written and organized. So far, you've been writing function-based code, sometimes called procedural programming.

## Modifying an object

You can change the value of the property of an object by just *assigning* a new value to it, just like you do with a variable.

```javascript
var car = {
    color: "black",
    type: "truck",
    brand: "Ford"
};

console.log(car.type); // truck

car.type = "van";
console.log(car.type);  //van
```

## Adding new properties to an existing object

In JavaScript you can add properties to an existing object just by using a new *key* and assigning it a *value*.

```javascript
var car = {
    color: "black",
    type: "truck",
    brand: "Ford"
};

console.log(car.price); // undefined

car.price = 30000;

console.log(car.price); // 30000
```

## Real world objects

One of the reasons that object oriented programming works well as a model is that we are used to interacting with objects in the real world, so we have a good reference.

Lets take a few minutes and choose a real world object to describe the properties of.
