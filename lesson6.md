[Class Video]()

## Outline
* Review
  * Arrays


## Evaluate Expressions

Evaluate the following expressions when the following array have been defined. 

```javascript
var evens = [2, 4, 8];
var odds = [1, 5, 33];
var foods = ['bread', 'hamburger', 'banana', 'cabbage'];
var sodas = ['sprite', 'coke', 'pepsi', 'orange soda', 'mountain dew'];

evens[2]
odds[10]
foods[2] + ' ' foods[0]
foods[0] < foods[1]
evens.length + foods.length
sodas[-2]
```

## Manipulating Arrays

Give the following arrays are defined. 

Write code that will perform the following tasks

```javascript
var a = [7, 3, 1];
var b = [1, 5, 6];
var foods = ['bread', 'hamburger', 'banana', 'cabbage'];
var sodas = ['sprite', 'coke', 'pepsi', 'orange soda', 'mountain dew'];
```

- set the value of array foods at position 2 to 'orange'
- define an array that has as elements the lengths of the strings from array foods, call this array *lengths*
- set the value of array a at position 3 to the sum of the other elements of a
- add 101 to the front of array a
- add 201 to the end of array b


### Average the integers in an array

```javascript
// find the average of an array
var numbers = [60, 78, 97, 82, 23];
var total = 0;
var index = 0;

while (index < numbers.length) {
    // What goes here?
    index++;
}

var avg = // How do we compute the average
console.log("The average is: " + avg);
```

### Longest word
This program figures out what the longest word is in an array. Think about why we need to keep track of the longest word.

```javascript
var list = ['bananas', 'potatoes', 'mangos', 'raspberry', 'persimmon', 'kiwi'];
var longest = '';
var index = 0;

while (index < list.length) {
    // Do something here
    index++;
}
```
