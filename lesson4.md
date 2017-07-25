[Class Video](https://youtu.be/0M2vjI2Zr9I)

## Outline
* Introductions
* Review
    * Creating and running files
    * Comments
    * Boolean operators
    * comparison (==, ===, <, <=, >, >=, !=, !==)
        * && (and)
        * || (or)
        * ! (not)
    * if statements
* Two new types
    * null
    * undefined
* Looping
  * while

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

## Null and undefined

```javascript
var foo;

typeof foo;

foo === undefined

var bar = null;

typeof bar;

bar === null

undefined === undefined

null === null

null === undefined

null == undefined

foo == bar

foo === bar
```

## More details on logical expressions and nil
[Zero or empty vs null](https://www.reddit.com/r/geek/comments/6128y3/amusing_example_between_0_and_null_0_on_the_left/)
[Nothing](https://youtu.be/M5QGkOGZubQ)


## While loops

Until now, all of our code has moved sequentially through the program from top to bottom, like reading a book.
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

```javascript
while (true) {
    console.log("This is the loop that never ends");
    console.log("it just goes on and on my friends");
}
```

## Breaking out of a loop

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
