---
author: Jared Siirila
title: Programming Concepts
---

## Outline
* Scope
* Reference vs value
* Objects

---

# Scope

--

Scope is the area within a program that a variable is accessible.  

--

What scopes have we worked with so far in class:

* Global scope
<!-- .element: class="fragment" -->
* Function scope
<!-- .element: class="fragment" -->

--

Functions create their own scope, and the code outside the function doesn't have access to the functions scope.
<!-- .element: class="fragment" -->

The parameters of a function are temporary. They cease to exist after we exit the function.
<!-- .element: class="fragment" -->

--

Rules of scopes:
* A variable name has to be unique within the same scope
<!-- .element: class="fragment" -->
* Scopes can be nested inside of other scopes
<!-- .element: class="fragment" -->
* Code in an *inner scope* or *nested scope* can access variables from the *outer scope*
<!-- .element: class="fragment" -->

* Unless you reused a variable name in both scopes. In that case the outer variable name is said to be *shadowed* and can't be accessed in the inner scope.
<!-- .element: class="fragment" -->


---

## Reference vs value

--

A *reference* is a pointer to a location in memory where a *value* is stored.

--

In JavaScript whether a variable is a reference or a value is determined by its *type*.

--

Pop Quiz: What are the types we have learned so far in JavaScript

* boolean
<!-- .element: class="fragment" -->
* number
<!-- .element: class="fragment" -->
* string
<!-- .element: class="fragment" -->
* null
<!-- .element: class="fragment" -->
* undefined
<!-- .element: class="fragment" -->

--

For the primitive types of *boolean*, *number*, *string*, *null*, and *undefined* JavaScript always stores the actual value in a variable.

--

For *objects*, which are the sole reference type, JavaScript stores a *reference* to the object in a variable.

--

This leads to some very different behavior between the two types, and can be quite confusing when you are first learning JavaScript or any other language with similar behavior.

--

The most common example of the difference between the two types is what happens when you pass a value of that type in to a function.

--

When you pass a value type in to a function, it creates a copy of that value with the appropriate parameter name.

This means that if you modify the value of that parameter in the function it doesn't affect the value of the variable outside of the function.
<!-- .element: class="fragment" -->

--

However, for *reference types* it doesn't copy the value in the function.  
Instead the parameter in the function *refers* to the same value.  

This means that if you change values in what the variable refers to it will change in the function and outside of the function.  
<!-- .element: class="fragment" -->

--

![reference vs value](/images/pass-by-reference-vs-pass-by-value-animation.gif)



---

# Objects

--

![Objects Everywhere](https://i.imgflip.com/1jfg8c.jpg)

--

An *object* is an entity that has *properties*.

--

An object *encapsulates* *state* and *function* in its *properties*.

--

State - Characteristics of an object

Function - Behavior of the object. Methods (functions) that can be performed with the object.

---

## Object Example

--

We have encountered many objects already in class.

Some of the objects that we have used include:
* The `Math` object
<!-- .element: class="fragment" -->

* The `console` object
<!-- .element: class="fragment" -->

* The `Array` object
<!-- .element: class="fragment" -->


---

## Creating Objects

--

There are several ways to create objects in JavaScript, but we will start with the simplest form:    
*object literal* syntax.

```javascript
var car = {};  // Creates an object with no properties
```

---

## Object properties

--

A JavaScript object is a `type` that has properties. Each property is a key/value pair. The key is the *property name*.

--

The *value* of a property can be any *type*, such as a number, string, array, function, etc.

--

When a property is a function it is called a *method*.

--

Basically, whenever referring to a function called on an object it is referred to as a *method* of that object. For example, we have frequently called the `log` method of the `console` object.

---

## Setting and accessing object properties

--

Using the same *object literal* syntax, we can set properties on an object when it is created.

--

To set a property using object literal syntax, you put the property name or *key* on the left side followed by a colon,
then the right side is the property *value* (hence key/value pair).  
Each key/value pair is followed by a comma, just like each item in an array is followed by a comma.

--

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
