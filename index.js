const fs = require('fs');
const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require('./lib/shapes');

//Tutor ?'s - why is it that the user can input a color but in the shapes.test.js file a 'color' has to be set?
// Can the input override the test? Is it just for testing purposes?
//Array of questions for the user to input
const questions = [
    {
        type: "input",
        name: "text",
        message: "What text would you like for your logo? Enter up to three characters.",
    },
    {
        type: "input",
        name: "Text color",
        message: "What color do you want set for your text?",
    },
    {
        type: "input",
        name: "Shape color",
        message: "What color do you want to fill your shape with?",
    },
    {
        type: "list",
        name: "Shape choice",
        message: "Which shape would you like for your logo?",
        choices: ["Circle", "Square", "Triangle"],
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
    setTextChoice(text,color){
        this.textChoice = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShapeChoice(shape){
        this.shapeChoice = shape.render()
}
}

function writeToFile(fileName, data) {
   fs.writeFile(fileName, data,  (err) => {
        if(err) {
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
                if(answers.text.length > 0 && answers.text.length < 4) {
                    user_text = answers.text;
                } else {
                    console.log("Invalid entry, please enter 1-3 characters")
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
//the initiailizating function should be prompting the questions and console logging them
//in the same initialization function you have to verify the user type input of the shapes to the shape
//also write an else function for invalid shapes 
//right after that the shape should be set to a color
//create a 'new' svg iinstance and add shape and text color and text into it
//console log the shape and status
//handle the write to file svg file svg string
//call for the intitialization