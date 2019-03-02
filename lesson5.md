[Class Video]()

## Outline
* Review
    * null and undefined
    * while loops
* Using JavaScript on the web
    * document.write
    * Running an html file in Cloud 9
    * prompt
* Comments
    * Single line
    * multi-line
    * Using comments for thinking/planning


## Using JavaScript on the web

You can run JavaScript on a website by loading it on a page using a `<script>` tag.  

For now, don't worry too much about the details of this webpage. We are using this more as an easy way to get user input for a program.

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

### document.write

You can write content to the webpage using the `document.write` method in a JavaScript file running inside a website.

```
document.write("Welcome to my new homepage. It is still under construction.");
```

### Running an html file in Cloud 9

To run an html file in Cloud 9, just have the html file open and click the run button.  
This will run a *webserver*, and a link to the server location should appear in a window at the bottom of the screen.  
When you click that link you can either open the webpage in a new window by choosing *open* or open it in a tab in Cloud 9 by choosing *open in preview*.

### prompt
The `prompt` function will show a dialog with the provided text prompting the user for input.  
When the user clicks OK on the prompt dialog, it will return the input provided by the user.

```javascript
var name = prompt("What is your name?");
document.write("Greetings " + name + " it is nice to meet you.");
```

## Comments

Comments in JavaScript can be single line comments or multi-line comments.

```javascript
// This is a single line comment
// A single line comment starts with two slashes, and anything after the slashes is the comment
var name = "Jared";  // A single line comment can even be on the same line as running code
// var number = 42; But if the comment starts before the code then the code does not run

/* Multi-line comments are started with a slash star and end with a star slash
Anything that appears between those delimiters is part of the comment
var number = 42
*/

var number = 42;
```

### Using comments for thinking/planning
