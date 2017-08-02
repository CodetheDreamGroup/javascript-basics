[Class Video]()

## Outline
* Functions

## Functions

A *function* is a group of *statements* that perform a task.

Benefits of functions:
* Write code once and reuse it multiple times
* Use the same logic with different values
* Break code up into small pieces
* Isolate variables and logic
* Abstraction allows you to think about code at a higher level

You run code in a function by making a *function call*.

After a function completes, the program returns execution to the calling code.

Here is how you declare a function using *function declaration* syntax.

```javascript
// This code declares a function, but doesn't run the code inside the function
function printHello() {
    console.log('Hello world!');
}

console.log('Start program!');

// Call the printHello function
printHello();

// Call the printHello function again
printHello();

console.log('End program!');
```

All functions return a value. 

A function can only return one value each time it is *called*, but each *call* to the function could return a different value.

Lets take another look at the printHello function before and see what value returned.

```javascript
function printHello() {
    console.log('Hello world!');
}

console.log('Start program!');

var returned = printHello();

console.log(returned);
console.log('End program!');
```

It would be nice if we could control the value returned from our functions, and we can.

To return a specific value from a function use the *return* statement.

```javascript
function getHello() {
    return 'Hello world!';
}

console.log('Start program!');

var returned = getHello();

console.log(returned);

console.log(getHello());
console.log('End program!');
```

Functions stop executing immediately after running a *return statement*, no further code in that function will be run.


```javascript
function getHello() {
    return 'Hello world!';
    console.log('This will never be printed');
}

console.log('Start program!');

console.log(getHello());

console.log('End program!');
```

You can also declare variables inside functions. A variable declared inside a function is a *local variable*.

Local variables are limited to the *scope* of the function and can't be used outside it.

Trying to reference a *local variable* outside of its scope results in an error.

We haven't talked much about scope yet but it will be an important concept going forward that we will cover in more detail later.


```javascript
function getHello() {
    var hello = 'Hello world!';
    return hello;
}

console.log('Start program!');

console.log(getHello());

console.log(hello);

console.log('End program!');
```


## Function parameters

Functions can take *parameters*, which are like local variables. Parameters are declared in the parethesis after the function name.

You supply the value for parameters when calling a function. The supplied parameters are called *arguments*.

Different *arguments* can be provided each time you call a function. This allows you to reuse the same logic with different values.

```javascript
// Declare a function named sayHello with a `name` parameter
function sayHello(name) {
    console.log("Hello " + name);
}

console.log('Start program!');

// Call the sayHello function with `Jared` as the argument for the `name` parameter
sayHello("Jared");
sayHello("Manuel");

console.log('End program!');
```

The *scope* of parameters is only within the function body.

```javascript
function add(a, b) {
  return a + b;
}

var sum = add(5, 7);
console.log(sum);
console.log(a); // This is undefined because a doesn't exist

```

Parameter order matters!

```javascript
function subtract(a, b) {
  return a - b;
}

console.log(subtract(100, 58)); // results in a = 100 and b = 58 inside the function
console.log(subtract(58, 100)); // results in a = 58 and b = 100 inside the function

```

## Scope

