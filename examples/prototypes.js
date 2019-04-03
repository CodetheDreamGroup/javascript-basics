var shape = {
    border: 'red',
    computeArea: function () {
        return this.width * this.height;
    }
};

var shapes = [];

var triangle = Object.create(shape);
triangle.name = 'triangle';
triangle.width = 3;
triangle.height = 4;
triangle.computeArea = function () {
    return 0.5 * this.width * this.height;
}

var rectangle = Object.create(shape);
rectangle.name = 'rectangle';
rectangle.width = 5;
rectangle.height = 7;

var square = Object.create(shape);
square.name = 'square';
square.width = 5;
square.computeArea = function () {
    return this.width * this.width;
}

shapes.push(triangle);
shapes.push(rectangle);
shapes.push(square);


function printArea(shape) {
    console.log(`The area of the ${shape.name} is ${shape.computeArea()}`);
}

shapes.forEach(printArea);
