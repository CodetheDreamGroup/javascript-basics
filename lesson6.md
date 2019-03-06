[Class Video]()

## Outline
* Review
    * JavaScript in a browser
        * document.write
        * prompt
* Arrays
    * Creation
    * Reading
    * Modifying
    * Getting the length
    * Enumerating arrays
    * Common mistakes

# Arrays
An *array* is a type of *object* that contains a list of items (objects) in order

Some of the important properties of arrays in JavaScript:
* dynamically sized
* zero-index
* can be mixed type (this is different from many other programming languages)

## Creating Arrays
Arrays are created using square bracked around a comma separated list of items to put in the array.

```javascript
var a = [2, 3, 5, 7, 11, 13];
var emptyArray = [];
var food = ["pizza", "ice cream", "hamburger"];
var mixedTypes = ["hello", true, 3.1415, 7];
```

## Reading values in arrays

How can we read individual items in an array?

Arrays have an index for each position in the array, and the index starts at 0.

![array indexes](http://voidexception.weebly.com/uploads/1/1/9/4/11944659/4652147_orig.jpg)

To access an array item, put the name of the array followed by square brackets containing the index

```javascript
var a = [6,5,4];
a[0];     // 6
a[1];     // 5
a[2];     // 4
a.length; // 3
typeof a; // 'object'  WHAT! Why? Isn't it an 'array'? What is an object anyway?
```

## Pop Quiz

What are the types in JavaScript that we have learned?

This can be a little confusing since the square brackets are both used to define an array, and to access items in the array. You will get it with practice.

## Exercise
Evaluate the following expressions assuming that the following array is set

```javascript
var numbers = [1, 7, 11, 19];

numbers[0];
numbers[1];
numbers[1+1];
numbers[-1];
numbers[7];
numbers[18];
numbers["0"];
```

Create the following arrays in node

- Array with 3 integers
- Array with with the strings "bob", "alice", "charlie"
- Array with two booleans and 1 integer

## Reading array elements

Given the following array, what is the index of the values given?

```javascript
var array = [1, 8, 3, 4, null, "old", 7.1, true, 4, null];
```

- "old"
- 8
- true
- 7.1
- 4
- null

What is the length of the array?

## Expressions which includes arrays

The operation of indexing an array can be combined with other operations to create an expression. 

Assume that the following arrays have been defined for you and evaluate the following expressions

```javascript
var numbers = [1,2,3,4,5];
var animals = ['elephant', 'cat', 'dog', 'tiger', 'camel'];
var odds = [3, 1, 7, 1, 5, 9, 21, 13];
var bools = [true, false, false, true];
```

- odds[1]
- animals[3]
- numbers[1 + 1]
- numbers[-1]
- numbers[5 / 2]
- animals[numbers[1]]
- odds[3] + numbers[1] < 2
- bools[3] && bools[0]
- odds[10] || bools[0]


## Modifying arrays

Remember that assignments store values in variables. 
We will now practice how we store values inside arrays, including changing existing values.
After the following assignments, what does the array a look like?

```javascript
var array = [1, 'b', true];

array[0] = 5;
array[2] = false;
array[0 + 1] = 'c';
array[3] = 10;
array[5] = 66;
array[1] = null;
array[2] = 3 < 7 && 8 < 3;

// Adding a new item to an array can be done multiple ways
array.push(42);
// If you know the length of the array you can also just put an item into the next position in the array
// but how do we get the length of an array?
```

## Getting the length of an array
Arrays are *objects*. They are one of the first objects that we have encountered in JavaScript.

We won't get into all of the details of objects today, that is for another class, but we will look at one aspect.

*Objects* have *properties*, and one property on an array object is its length.

Properties can be read using *dot syntax*.

```javascript
var heroes = ["Wonder Woman", "Spiderman", "Black Panther", "Captain Marvel"];
heroes.length   // 4
```

This dot syntax should look familiar to you from some JavaScript that you have already written.

## Enumerating arrays

Last class we learned about while loops. To refresh our memory, here is a basic while loop.

```javascript
var endAt = 42;

var count = 1;

while (count < endAt) {
    console.log('Not the answer. Keep going.');
    count++;
}

console.log('Yes. The answer to life, the universe, and everything is: ' + count);
```

Loops can also be used to step through each value in an array and perform some action with it.

```javascript
var arr = [1, 2, 3, 4, 5, 6, 7];
var index = 0;

while (index < arr.length) {
    console.log(arr[index]);
    index++;
}
```

For example, you might add a number to each value in an array, and print the result

```javascript
var arr = [1, 2, 3, 4, 5, 6, 7];
var index = 0;

while (index < arr.length) {
    arr[index] = arr[index] + 5;
    console.log(arr[index]);
    index++;
}
```

You can also combine looping through an array with if statements.
This will enable you to check conditions on elements of an array. 
Guess what will happen in the following code.

```javascript
var arr = [1, 2, 3, 4, 5, 6, 7];
var index = 0;

while (index < arr.length) {
    if (arr[index] % 2 === 0) {
        console.log(arr[index]);
    }
    index++;
}
```

```javascript
var animals = ['dog', 'elephant', 'cat', 'penguin', 'rat', 'quail', 'bat'];
var index = 0;

while (index < animals.length) {
    if (animals[index].length <= 3) {
        console.log(animals[index]);
    }
    index++;
}
```

```javascript
var bottles = [99, 98, 97, 96, 95, 94, 93]
var index = 0;

while (index < bottles.length) {
    console.log(bottles[index] + " bottles of beer on the wall...");
    index++;
}
```

## Common mistakes

### Off by one errors

Most of the common mistakes made when working with arrays will fall in to the category of off by one errors.

This can happen because it is a little confusing that arrays start at index 0 instead of index 1.

Here's a good example of an off by 1 error working with an array.

```javascript
var movies = ["Wonder Woman", "Spiderman: Enter the Spiderverse", "Guardians of the Galaxy", "Thor: Ragnarok"];
var index = 0;

console.log("Some of my favorite superhero movies are:");

while (index <= movies.length) {
    console.log("* " + movies[index]);
    index++;
}
```

These types of errors can be even more frustrating in JavaScript compared to some other languages because they don't *throw* an actual error. Instead if you access an index outside of the bounds of the array JavaScript returns the value `undefined`.
