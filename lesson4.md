## Outline
* Review
    * Type coercion
    * Boolean operators
        * comparison (==, ===, <, <=, >, >=, !=, !==)
        * logical (&&, ||, !)
    * if statements
* Two new types
    * null
    * undefined
* Block statements
* more control statements
    * if...else
    * if...else if...else
    * Common mistake - accidental assignment
* Looping
  * while


## Exercises
Conditional example that would be best with an if/else and one with an if/else if/else

Print '<num> is odd' or '<num> is even' based on the value of a number.

## Review

What is the output of the following programs:

```javascript
var a = 1;
var b = "days";
console.log((a + 3) + " " + b);
```

```javascript
var b = 10;
var c = 11;
console.log((b + 1) <= (c - 1));
```

```javascript
var number = 42;

if (number == "42") {
    console.log("The answer to life, the universe, everything");
}

console.log("But what is the question?");
```

```javascript
var number = 42;

if (number === "42") {
    console.log("The answer to life, the universe, everything");
}

console.log("But what is the question?");
```

## Null and undefined

*undefined* means a variable has been declared, but has not yet been assigned a value.  

*null* is an assignment value that represents nothing.  
It is distinct from the value of 0 for a number or an empty string "".


```javascript
var foo;

typeof foo;

foo === undefined;

var bar = null;

typeof bar;

bar === null;

undefined === undefined;

null === null;

null === undefined;

null == undefined;

foo == bar;

foo === bar;
```

Wait a minute...you said that *null* was a type, but when running `typeof null` returns that its type is 'object', not 'null'.  
That is a bug in the JavaScript language itself that can't be fixed now without causing programs that rely on it to break.  
See [https://stackoverflow.com/questions/18808226/why-is-typeof-null-object]

## Fun with null
[Zero or empty vs null](https://www.reddit.com/r/geek/comments/6128y3/amusing_example_between_0_and_null_0_on_the_left/)  
[Nothing](https://youtu.be/M5QGkOGZubQ)


## Block statements
What is output when the following program runs?
```javascript
    var name = "Ramiro";

    if (name === "Jared")
        console.log("Greetings Jared");
        console.log("How is the JavaScript class going?");

    console.log("Have a nice day.");
```

A *block statement* is used to group zero or more statements.  
The block is delimited by a pair of curly brackets.

Allows you to provide multiple statements where only one is expected.

If we used a block statement in the following program we could only print the two console logs when the if statement evaluates to truthy.

```javascript
    var name = "Ramiro";

    if (name === "Jared") {
        console.log("Greetings Jared");
        console.log("How is the JavaScript class going?");
    }

    console.log("Have a nice day.");
```

## More control statements

### Code Together

Using only what we have learned so far, lets write a program that computes the total price of an item including tax.  
Tax is computed as following:
If the category is "food" the tax is 0%.  
If the category is "clothing" the tax is 2%.  
If the category is anything else the tax is 5%.  

### if...else

An if statement has a second optional portion, the *else* statement.  
The *else* statement will be executed whenever the *if* statement evaluates to falsy.

```javascript
if (3 > 4) {
    console.log("Something is wrong with math.");
} else {
    console.log("Math works as expected.");
}
```

Lets rewrite our earlier price program using an if...else statement.

Do you think that made it simpler?

### if...else if...else

A simpler way to write nested if statements uses the following syntax.

```javascript
if (4 > 4) {
    console.log("Something is wrong with math.");
} else if (4 < 4){
    console.log("Something is still wrong with math.");
} else {
    console.log("Math works as expected.");
}
```

This *else if* line is not a new statement, it is just an else statement that executes the statement following it, which is an *if* statement.

## Common mistake - accidental assigment instead of comparison

A common mistake to be aware of in your code is accidentally assigning a value in a conditional statement instead of checking for equality.  

For example:

```javascript
var notTheAnswer = 7;

if (notTheAnswer = 42) {
    console.log("The answer to life, the universe, everything");
}
```

Watch out for this in your own code.

## While loops

Until now, all of our code has moved sequentially through the program from top to bottom, like reading a book.  
At best, we have skipped some portions of the code using an if statement, but the code has still read in a single direction.  
Now we will introduce the ability to run the same section of code multiple times.

```javascript
var count = 0;

// Count to 10
while (count < 10) {
    console.log(count);
    count = count + 1;
}
```

There is a bug in the program above. What is it, and how can we fix it?

## Getting stuck and unstuck

```javascript
var notTheAnswer = 7;

while (notTheAnswer = 42) {
    console.log("This is the loop that never ends.");
    console.log("It just goes on and on my friends.");
    console.log("Somebody started running it, not knowing what it was");
    console.log("and they'll continue running it forever just because...");
}
```

`Ctrl-C` stops a running program

## Breaking out of a loop early

The *break* statement jumps out of a loop.

```javascript
var count = 0;

while (true) {
    console.log("count so far: " + count);

    if (count > 10) {
        break;
    }

    count++;
}
```
