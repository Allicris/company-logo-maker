const inquirer = require("inquirer");
const shapes = require('./lib/shapes');

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
        message: "What color do you want set for your background?",
    },
    {
        type: "list",
        name: "Shape size",
        message: "Which shape would you like for your logo?",
        choices: ["Circle", "Square", "Triangle"],
    },
];