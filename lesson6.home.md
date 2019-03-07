## Practice the lesson

Go through each of the code examples in the lesson and type them in as practice working with array.

Before evaluating an expression make a guess as to what the result will be.

## Print prime numbers

Starting with the following code, print out the list of prime numbers.

```javascript
var primesTo100 = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71];

// Print the list of numbers in the primesTo100 variable
```

## Print the even numbers

In the last homework there was a problem to print the even numbers from 1 to 100.

This time, create an array and push every even number from 1 to 100 in to the array and then print out the array.

Remember, you can push a value to the end of an array using the `push` method on the array.


## Print the odd numbers

Starting with the following code, print the list of odd numbers in the numbers array.

Each time you run this program the result will be different, so you will need to check against the numbers array for that run to make sure it worked correctly.

```javascript
var index = 0;
var numbers = [];

while(index < 20) {
    numbers.push(Math.round(Math.random() * 100));
    index++;
}
console.log("The full list of numbers is");
console.log(numbers);

var oddNumbers = [];

// Your code goes here

console.log("The list of odd numbers is");
console.log(oddNumbers);
```

## Find the longest word in an array

Starting with the following code, print out the longest word in the array.

```javascript
var fruits = ["apple", "banana", "orange", "strawberry", "pear", "peach"];
```

## Return only the items at odd positions

This code is supposed to print out every item at an odd index position in the list.  
Unfortunately, there is a bug in this code.  
Fix the bug so that this code runs correctly.  

```javascript
var array = [2,4,6,8,10,12,14,16,18,20];
var index = 0;

while (index < array.length) {
    if (index % 2 === 0) {
        console.log(array[index]);
    }
    index++;
}
```

## Print the Marvel movies in reverse chronological order

Write code that prints the movies in this list of marvel movies in reverse chronological order.  
The movies are listed in chronological order in the array, so you will need to print the array from the last item to the first item.

```javascript
var marvelMovies = [ "Iron Man", "The Incredible Hulk", "Iron Man 2", "Thor", "Captain America: The First Avenger", "The Avengers", "Iron Man 3", "Thor: The Dark World", "Captain America: The Winter Soldier", "Guardians of the Galaxy", "Avengers: Age of Ultron", "Ant-Man", "Captain America: Civil War", "Doctor Strange", "Guardians of the Galaxy Vol. 2", "Spider-Man: Homecoming", "Thor: Ragnarok", "Black Panther", "Avengers: Infinity War – Part 1", "Ant-Man and the Wasp", "Captain Marvel", "Avengers: Endgame", "Spider-Man: Far From Home"];
```

## Compute a receipt

Starting with an array containing the following list of prices, compute the total cost of everything in the list.

```javascript
var prices = [1.97, 4.99, 20, 3.54, 9.99];
```

## FizzBuzz

Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

This is a classic programming interview question, so feel free to read up on the history behind it after you solve it.

## Guessing game

Starting with the following code, write a guessing game where the user has to guess a secret number.  
After each guess tell the user whether their guess was too large, too small, or correct.  
When they guess it correctly tell them how many tries it took to guess the number.  

This one will need to be run in the browser since that is the only place we have learned to get user input so far.

```javascript
var number = Math.floor(Math.random() * 100);

var guess = prompt("Guess what number I am thinking of from 0 to 99?");

```