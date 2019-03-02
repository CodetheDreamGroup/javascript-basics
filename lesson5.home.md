<!-- 
* 99 bottles of beer/soda
* FizzBuzz
* Guess a random number provided by Math.random
* Allow a user to guess a random number
* jumbled code
-->


# Looping

## Squares
Write a program that prints the squares of each number from 1 to 10.

## Odd numbers
Write a program that prints the odd numbers from 1 to 100.

## Even numbers
Write a program that prints the even numbers from 1 to 100.

## Celebrate birthdays
Write a program that prints "Happy birthday. You are <age> years old." For each year from 1 to 65.

In addition print the following statements when they match their age:
    * When they are a teenage print `You are a teenage."
    * When they turn 21 print "You can legally drink."
    * When they turn 40 print "You are over the hill."
    * When they turn 65 print "Happy retirement."


# Learning something new on your own
Read up on the remainder, also frequently called the modulo operator in JavaScript.  
[Remainder operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_())

## odd or even
Using the remained operator, and starting with the following code, write the code that prints whether the number is odd or even.
Don't get hung up on how the initial number is being computed.

```javascript
var number = Math.floor(Math.random() * 100);

console.log("The number being checked is " + number);

// Print if the number is odd or even
```

# Using user input

## Get users age
Write a program that will run in a webpage and prompt the user to input their age.  
Once they have input their age, print out a message based on their age.  
You can use the messages from the *celebrate birthdays* exercise, or you can choose your own messages.  
Have at least 4 different messages for different ages.  

As a reference, this is a simple webpage that will run the code in the index.js file when opened.
```html
<!DOCTYPE html>
<html>
    <head>
        <script type="text/javascript" src="index.js"></script>
    </head>
    <body>
        
    </body>
</html>
```

## Name length
Write a program that prompts a user to enter their name.  
If the name they enter is shorter than 5 characters, say that they have a short name.  
If the name is longer than 10 characters, say that they have a long name.

What happens if the user enters a number instead of a name?  
Is it what you expected to happen?  
