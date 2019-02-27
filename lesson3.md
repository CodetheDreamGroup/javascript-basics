## Outline

[Class Video]()

* Review
    * Types
    * Variables
* Variables  
    * Declaration & Assignment  
    * Case Sensitive
    * Valid/Invalid variables names
        * Must begin with a letter, $, or _
        * Can contain letters, digits, underscores, and dollar signs.
        * Reserved words (like JavaScript keywords) cannot be used as names [http://www.javascripter.net/faq/reserved.htm]
        * Fun tool: [JavaScript variable name validator](https://mothereff.in/js-variables)
* Boolean type
* Boolean comparison operators
    * comparison (==, <, <=, >, >=, !=)
* Type coercion Exercise
* Type coercion
* Strict (non-coercing) boolean comparison operators
    * (===, !==)
* Boolean logical operators
    * and (&&)
    * or (||)
    * not (!)
* Creating a hello world file
    * console.log
    * comments
        * Single line comments  
        * Multi line comments  
        * Using comments to plan
    * Have an error in a file
* Printing exercise
* if statements
* Truthy and Falsy


# Exercises

## Type Coercion Exercise
Run the following expressions in a JavaScript REPL console, such as the immediate window in Cloud 9.  
Were the results what you expected?  
If not, which ones gave different results than expected?  


```javascript
true == true;

true == false;

true != false;

0 == 0;

0 == "0";

"0" == 0;

true == "true";

false == "false";

true == 1;

false == 0;
```


## Boolean Comparison Expressions

Remember that a boolean expression evaluates to either True or False. What do the following boolean expressions evaluate to?
Remember that you can check what they evaluate to by inputting them into the node JavaScript console

1. `5 < 10`
2. `5 <= 5.0`
3. `10 - 1 > 3`
4. `3 * 1 - 1 == 1 + 1`
5. `5.0 / 2 == 5 / 2`
6. `"Bob" == "Alice"`
7. `5 == "5"`
8. `5 === "5"`
9. `5 < "hello"`
10. `"hello" < 5`


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


## Truthy and Falsy Exercise
Run the following expressions in a JavaScript REPL. Don't worry if there are bits of the code you don't understand yet.
Were the results what you expected?  
If not, which ones gave different results than expected?  


```javascript
if ("") {
    console.log("An empty string is true?");
}

if (!"") {
    console.log("An empty string is false?");
}

if (!0) {
    console.log("Zero is false?");
}


if (42) {
    console.log("The number 42 is true?");
}
```
