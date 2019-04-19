function addNameToHello(hello) {
    return hello + ", my name is Jared";
}

function sayHello() {
    console.log('Hello');
    // return 'Hello';
}

var greeting = sayHello();
console.log(greeting);
greeting = addNameToHello(greeting);
console.log(greeting);
