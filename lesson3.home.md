# Numbers (Integers and Floats) and Strings
In class we used node to immediately see the feedback of our code. In this assignment we will put our programs into files and then running our code from the command line.

Remember that to run your program you use the `node` command and pass the name of the file where you put your code as a parameter. For example:

```bash
node add.js
```
In the following exercises you will be instructed to create a file with a given filename to do something interesting then you will run the code to see the output.

Remember that to output something to the terminal we use `console.log(<output>)` in JavaScript.

## Numbers
Create a new file called *numbers.js* that outputs the following to the command line.

1. Your age in days (assume each year has 365 days)
2. How tall you are in inches
3. In minutes, how much time you spend working or studying each week.

Note that you can directly use JavaScript as a calculator in this exercise. For example in your file you can do something like this:

```javascript
console.log(20 * 365);
```

The output should be like:

```bash
950
68
2400
```

If you want to make it clearer what is being output add some text to each line, such as:

"I am <age in days> days old"

## Strings

Create a file called *strings.js* that outputs the following:

1. Your name
2. The names of your siblings
3. The names of your parents

Your output should be something like:

```bash
John Smith
Bob Smith, Sara Smith, Tom Smith
Wilma Smith, Jermiah Smith
```

## Variables

Create a file variables.js and at the top set the values for the following list of variables.
Give the variables meaningful names so if somebody else read the code they could understand what the value was for.

1. your age (as an integer)
2. your name (as a string)
3. the city you live in (as a string)

Write some code that says "Hello my name is <your name>, I'm <your age> years old and I live in <your city>."

Remember, you can concatenate strings in JavaScript by using + between the strings, for example:

```javascript
console.log("Hello " + "world!");
```

## Logic

Create a file and copy the code below into the file to start with. There are bits of this code that you won't understand yet, but it should work as long as it is copied exactly. Run the file to verify that everything works, then follow the instructions in the `comments`, the lines that begin with //, to output the expected results. 

Run the program several times.
Do any of the results change for each run?


```javascript
var e = Math.E;
var pi = Math.PI;
var num = Math.random() * 10;

console.log("e is greater than pi: ");
// Output whether the above statement is true or false

console.log("e is less than pi: ");
// Output whether the above statement is true or false

console.log("The random number is greater than 5: ");
// Output whether the above statement is true or false

console.log("done");
```

## More Logic

Either in a file, or in a REPL define the following variables and then evaluate the expressions below.

```javascript
var age = 25;
var ageText = age.toString();
var office = "American Underground";
var pi = 3.14;
var zero = 0;
var zeroString = "0";
```

Evaluate the following expressions

1. `age > 10 && age < 20`
2. `age > 20 && age < 30`
3. `office.length > 20 || age < 12`
4. `pi * 2 < 7`
5. `!(office.length - 2 < 20)`
6. `age === ageText`
7. `age !== ageText`
8. `!(age === ageText)`
9. `!age`
10. `!zero`
11. `!zeroString`


## Make an educated guess

The code below combines some concepts that we have learned with at least 1 new concept.  
Look at the code below and make a guess about what the portions of code that we haven't gone over will do.  
Based on that guess, what should the program output?


After you have made that guess, run the program.  
Was the output what you expected?  
If not, why do you think it was different?

```javascript
var name = "Bob Smith";
if (name.length > 10) {
    console.log("Your name is too long");
}
```