//Tutor ?'s - why would i put the classes with the const instead of the file path? Is that even possible?
const { Triangle, Circle, Square } = require('./shapes');
//Tutor ?'s - is setting the color blue here just for testing purposes?
//Is it better to create a variable called color and use template literals to apply the color?
describe('Triangle', () => {
    test.todo('should return a blue triangle')
    const output = new Triangle();
    const color = "";
    output.setColor(color);
    expect(output.render()).toEqual(`<polygon points="0,200 300,200 150,0" height="100%" width="100%" fill="${color}" />`);
 });

describe('Circle', () => {
    test.todo('should return a red circle')
    const output = new Circle();
    const color = ""
    output.setColor(color);
    expect(output.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width= "100%" fill="${color}" />`);
});

describe('Square', () => {
    test.todo('should return a green circle')
    const output = new Square();
    const color = "";
    output.setColor(color);
    expect(output.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}" />`)
});