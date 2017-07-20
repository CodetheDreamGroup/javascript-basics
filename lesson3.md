## Outline

[Class Video]()

* Introductions
* Review
    * Types
    * Variables
* Questions
* Creating a hello world file
    * console.log
    * comments
    * Have an error in a file
* First Exercise
* Boolean operators
    * comparison (==, <, <=, >, >=, !=)
    * && (and)
    * || (or)
    * ! (not)
* Second Exercise
* Type coercion
* Strict (non-converting) boolean operators
    * (===, !==)
* Third Exercise
* Truthy and Falsy
* if statements
    * else
    * else if


# Exercises

## Output
Remember that the method to output characters to the screen is `console.log('<Text to output>')`

### Greeting program

Create a program in a file called greeting.js that outputs a hello message to the user when run.

Store the message to be output in a variable at the top of the file, and use that variable to output the message.

## Boolean Comparison Expressions

Remember that a boolean expression evaluates to either True or False. What do the following boolean expressions evaluate to?
Remember that you can check what they evaluate to by inputting them into the node JavaScript console

1. 5 < 10
2. 5 <= 5.0
3. 10 - 1 > 3
4. 3 * 1 - 1 == 1 + 1
5. 5.0 / 2 == 5 / 2
6. "Bob" == "Alice"
7. 5 == "5"
8. 5 < "hello"
9. "hello" < 5


## Boolean Logical Expressions

There are only a few possibilities with logical boolean operations. The best thing to do is memorize them. Test your knowledge with this

### && (and) operator

1. true && true = ?
2. true && false = ?
3. false && true = ?
4. false && false = ?

### || (or) operator
1. true || true = ?
2. true || false = ?
3. false || true = ?
4. false || false = ?

### ! (not) operator
1. !false
2. !true


## Combine it all together

define the following variables:

```javascript
var age = 25;
var ageText = age.toString();
var office = "American Underground";
var pi = 3.14;
var zero = 0;
var zeroString = "0";
```

Evaluate the following expressions

1. age > 10 && age < 20
2. age > 20 && age < 30
3. office.length > 20 || age < 12
4. pi * 2 < 7
5. !(office.length - 2 < 20)
6. age === ageText
7. age !== ageText
8. !(age === ageText)
9. !age
10. !zero
11. !zeroString


## If statements

What will the following programs output:

```javascript
var name = "Bob Smith";
if name.length > 10 {
    console.log("Your name is too long");
}
```

```javascript
var age = 17;
if age > 18 {
    console.log("you are not able to vote yet.");
} else {
    console.log("you are able to vote.");
}
```
