const fs = require('fs');
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require('./lib/shapes');

//Tutor ?'s - why is it that the user can input a color but in the shapes.test.js file a 'color' has to be set?
// Can the input override the test? Is it just for testing purposes?
//Array of questions for the user to input
const questions = [
    {
        type: "input",
        name: "textChoice",
        message: "What text would you like for your logo? Enter up to three characters.",
    },
    {
        type: "input",
        name: "textColor",
        message: "What color do you want set for your text?",
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What color do you want to fill your shape with?",
    },
    {
        type: "list",
        name: "shapeChoice",
        message: "Which shape would you like for your logo?",
        choices: ["Triangle", "Circle", "Square"],
    },
];

//write to file function should be generating a logo. 
class SvgLogo {
    constructor() {
        this.textChoice = '';
        this.shapeChoice = '';
    }
    render() {
        return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeChoice}${this.textChoice}</svg>`
    }
    setTextChoice(text, color) {
        this.textChoice = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeChoice(shape) {
        this.shapeChoice = shape.render()
    }
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Logo Successfully saved!');
        }
    });
}

function initLogo() {
    var svgString = "";
    var svg_file = "logo.svg";
    //try inquirer await if there are any errors or glitches. 
    return inquirer.prompt(questions)
        .then((answers) => {
            var user_text = "";
            if (answers.textChoice.length > 0 && answers.textChoice.length < 4) {
                user_text = answers.textChoice;
            } else {
                console.log("Invalid entry, please enter 1-3 characters");
                return;
            }
            user_text_color = answers.textColor;
            user_shape_color = answers.shapeColor;
            user_shape_type = answers.shapeChoice;

            let user_shape;
            if (user_shape_type === 'Triangle') {
                user_shape = new Triangle();
            } else if (user_shape_type === 'Circle') {
                user_shape = new Circle();
            } else if (user_shape_type === 'Square') {
                user_shape = new Square();
            } else {
                console.log('Invalid shape!');
            }
            user_shape.setColor(user_shape_color);



            var svg = new SvgLogo();
            svg.setTextChoice(user_text, user_text_color);
            svg.setShapeChoice(user_shape);
            svgString = svg.render();
            console.log("Generated logo.svg" + svgString)
            writeToFile(svg_file, svgString);
        })
        .catch((error) => {
            console.log(error);
        });
}
initLogo();
//the initiailizating function should be prompting the questions and console logging them
//in the same initialization function you have to verify the user type input of the shapes to the shape
//also write an else function for invalid shapes 
//right after that the shape should be set to a color
//create a 'new' svg iinstance and add shape and text color and text into it
//console log the shape and status
//handle the write to file svg file svg string
//call for the intitialization