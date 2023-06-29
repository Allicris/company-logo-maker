//Tutor ?'s - why would i put the classes with the const instead of the file path? Is that even possible?
const { Circle, Square, Triangle } = require('./shapes');
//Tutor ?'s - is setting the color blue here just for testing purposes?
//Is it better to create a variable called color and use template literals to apply the color?
describe('Triangle', () => {
    it('should return a blue triangle')
    const output = new Triangle();
    output.setColor("blue");
    expect(output.render()).toEqual('<polygon points="0,200 300,200 150,0" height="100%" width="100%" fill="blue" />');
})
describe('Circle', () => {
    it('should return a red circle')
    const output = new Circle();
    output.setColor("red");
    expect(output.render()).toEqual('<circle cx="" cy="" r="" height="" width= "" fill="red" />');
})
describe('Square', () => {
    it('should return a green circle')
    const output = new Square();
    output.setColor("green");
    expect(output.render()).toEqual('<rect x="50" height="" width="" fill="green" />')
})