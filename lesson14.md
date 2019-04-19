---
author: Jared Siirila
title: JavaScript - Next Steps
---

## Outline
* Programming tips
* Advice from other programmers
* Additional resources
* Intermediate series
* Recursion

---

#  Programming Tips

--

When you are new to programming, it can be frustrating

--

Don't know where to start

--

Feel lost

--

Get stuck and don't know how to proceed

--

Too much to learn and remember

--

See a solution in your head, but can't translate it to code

---

How do you work through these challenges
--

Practice, practice, practice
<!-- .element: class="fragment" -->
Seriously, practice every single day even if it is just thinking about a problem

--

Break problems down and solve the smallest part first

--

Research and review what you already know

--

Experiment and test, it will help you see things differently

--

Take a break after looking at a problem for a while

---

# [Advice from other programmers](http://olafurw.com/2019-01-27-programmer-advice/)

--

[@originalJonLowe](https://twitter.com/originalJonLowe/status/1087594133357760513)  
Be supportive and kind in your journey for knowledge
Build other developers up because at the end of the day, you’re a part of a team
Be a team player over a “Rockstar” because knowledge is meant to be shared

--

[@iam_js_](https://twitter.com/iam_js_/status/1088153200371355650)  
There are no shortcuts, practice, practice and more practice

--

[@hedgeb](https://twitter.com/hedgeb/status/1087525264140234752)  
Even if you are just one page ahead in the manual, you can mentor someone and help them along in their journey learning to code

--

[@howbazaar](https://twitter.com/howbazaar/status/1087773774374522881)  
You are going to keep learning
You’re not done
Being good takes practice
Read books, read blogs
Don’t expect to be great in six months

--

[@jitterted](https://twitter.com/jitterted/status/1087575050318835712)  
Don’t compare yourself to others, compare yourself to where you were in the past.

--

[@greberger](https://twitter.com/greberger/status/1087842355481325574)  
Never be afraid to say that you don’t know something
Don’t be afraid to ask for help
We all suffer(ed) impostor syndrome

--

[@ben_deane](https://twitter.com/ben_deane/status/1087805790423904256)  
We all make mistakes
Try to honestly accept responsibility for your mistakes without being ashamed, and don’t put shame on others when they make mistakes

--

[@FiddlersCode](https://twitter.com/FiddlersCode/status/1087619274032721926)  
Tech is ephemeral but relationships last
Get to know your colleagues and yourself emotionally
Have the courage to be vulnerable about your struggles
Ask for help even if you’re afraid of looking dumb

--

[@bjorn_fahller](https://twitter.com/bjorn_fahller/status/1087439484709490689)  
Languages and tools come and go.
Learn to see patterns that repeat, or rather rhyme, in different languages and libraries and even paradigms.
Learn the pros and cons of different techniques, so you can choose wisely for your specific problems.

--

[@brianokken](https://twitter.com/brianokken/status/1088177245431115776)  
Learn to ask early these questions:

How do I know it’s working?
How do I automate that?
Learning to rely on automated tests ASAP will save them loads of time

---

![Dog God Programming Meme](https://s-media-cache-ak0.pinimg.com/736x/2a/cc/2d/2acc2de68677193442e9fd82492a9bc7.jpg)

---

# Additional Resources

--

[The JavaScript Way](https://github.com/bpesquet/thejsway) - 
A great introduction to JavaScript.  
Part 1 covers much of the same content we covered in class.

Parts 2 and 3 build on that knowledge to create a web server and web site using JavaScript, HTML, and CSS.

--

[Free Code Camp](https://www.freecodecamp.org/) - 
A series of online hands-on lessons to teach you web development and programming.

--

[Eloquent JavaScript](http://eloquentjavascript.net/index.html) - 
A great tutorial on programming JavaScript well.  
It moves at a much faster pace then we did in class, but teaches very useful concepts and patterns to use while coding.

--

[You Don't Know JS](https://github.com/getify/You-Dont-Know-JS) - 
An in depth book series about JavaScript.  
The first 3 books are a deeper dive into topics that we covered in class including *scopes* and *objects*.  
These are a challenging read since they are meant to be comprehensive, not introductory knowledge.

--

[How to Think like a Computer Scientist](http://interactivepython.org/courselib/static/thinkcspy/index.html)
This has nothing to do with JavaScript. It uses Python as the programming language.  
It is however a great book about learning how to think about programming and writing code.  
A very in depth book for those who are sure they want to make a career out of programming.


---

# Intermediate series

--

This series will touch on a lot of different topics including

--

Version control (git and GitHub)

--

HTML & CSS

--

Web servers

--

New JavaScript syntax (ES6+)

--

Node.js & npm

npm modules

--

A good way to prepare is to start reading parts 2 and 3 of The JavaScript Way that I included in the references above

---

# Recursion

--

## Recursion

--

### Recursion

--

#### Recursion

---

What is recursion?

--

The repeated application of a recursive function

You can't define something in terms of itself!
<!-- .element: class="fragment" -->

--

A function that calls itself

--

Why would you want to do that?

--

It can be shown mathematically that anything that can be done with loops can be done with *recursion*

--

Sometimes it is easier to think/reason about a problem recursively vs iteratively

---

# Example

--

## Computing the sum of numbers from 1 to N

--

The algorithm to do this recursively is as follows:

* sum(N) = 1 if N is 1
* otherwise: sum(N) = N + sum(N-1)

--

Lets do this together

--

sum(5) = 5 + sum(4)  
sum(4) = 4 + sum(3)  
sum(3) = 3 + sum(2)  
sum(2) = 2 + sum(1)  
sum(1) = 1   
