---
author: Jared Siirila
title: Programming Concepts
---

## Outline
* Review
  * object literal syntax
  * dot notation
* Objects and Object Oriented Programming (OOP)
  * Methods
  * this
  * Objects in JavaScript
  * References and Instances
  * Adding a Method

---

# Object literals

--

Objects can be created using object literal syntax by:  
* Starting the object with an open curly brace '{'
* Create a *key*/*value* pair separated by a colon for each property
* End the object with a closing curly brace '}'

--

```javascript
var hero = {
    name: "The Flash",
    realName: "Barry Allen",
    powers: ["super speed"]
}
```

--

Properties can be accessed using *dot notation*.

```javascript
console.log(hero.name);
```

--

Properties can be added/changed using *dot notation*

```javascript
hero.city = "Central City";
hero.powers.push = "Speed Force";
console.log(hero.powers);
```

---

# Object-oriented programming

--

Object-oriented programming (OOP for short) is a way to write programs using objects. When using OOP, you write, create, and modify objects, and the objects make up your program.

OOP changes the way a program is written and organized. So far, you've been writing function-based code, sometimes called procedural programming.
<!-- .element: class="fragment" -->

--

To really turn objects in to the primary item we are using in our code we will need to be able to associate actions or behaviors with our objects; not just state like we have done so far.

--

The actions that an object can perform are called methods  

Method is another name for a function that is part of an object.
<!-- .element: class="fragment" -->

Let's add the ability to say hi to our hero from before.
<!-- .element: class="fragment" -->

--

```javascript
var hero = {
    name: "The Flash",
    realName: "Barry Allen",
    powers: ["super speed"]
    greeting: function () {
        console.log("Hello, I'm The Flash");
    }
}

hero.greeting();
```

But what if I want to change the name of my hero? Then the greeting will be wrong.
<!-- .element: class="fragment" -->

--

We could use a variable for the name. Maybe refer to the variable name the object was assigned to.

```javascript
var hero = {
    name: "The Flash",
    greeting: function () {
        console.log("Hello, I'm " + hero.name);
    }
}

hero.greeting();
```

But what if we want to use a different variable name? We have to change the method.
<!-- .element: class="fragment" -->

---

# this

--

In real life, we don't usually refer to things by their formal name in a conversation.

For example, when you read a book every time someone is mentioned it doesn't use their full name.
<!-- .element: class="fragment" -->

Instead usually we us a pronoun in place of their name.
<!-- .element: class="fragment" -->

Objects in code also use a pronoun to be able to refer to themselves.
<!-- .element: class="fragment" -->

In JavaScript that pronoun is this.
<!-- .element: class="fragment" -->

--

Changing the code to use `this`.

```javascript
var hero = {
    name: "The Flash",
    greeting: function () {
        console.log("Hello, I'm " + this.name);
    }
}

hero.greeting();
```

--

Now if we change the name it still works correctly.

If we change the variable name that we use to point at the object it also still works.

---

# A sweet example

--

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

--

Wait a minute...what was that string you returned...

---

# A sidetrack to introduce template literals

--

Till now whenever we have wanted to output a string that contained variables within it we had to concatenate it using the + operator.

Template literals are a nice bit of syntactic sugar to make this easier to read and write.

--

A template literal is *delimited* using the backtick character.

This character is probably found in the upper left of your keyboard.

Variables can be referenced inline within a template literal string by *escaping* them by wrapping them in ${}.

--

```javascript
var name = "Jared";

console.log(`My name is ${name}`);
```

--

And now back to your regularly scheduled objects.

---

## Object Uniqueness

Just because two objects have the same values doesn't mean that they are equal to each other.

--

```javascript
var car1 = {
    type: "Prius",
    manufacturer: "Toyota"
};

var car2 = {
    type: "Prius",
    manufacturer: "Toyota"
};

if (car1 == car2) {
    console.log("They are the same car");
} else {
    console.log("They are different cars");
}
```

---

# Object definition

An *object* is an entity that has *properties*.

An object *encapsulates* *state* and *function* in its *properties*.

State - Characteristics of an object

Function - Behavior of the object. Methods (functions) that can be performed with the object.
