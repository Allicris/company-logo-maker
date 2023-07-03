# SVG Company Logo Maker

## Description
The user can use the command-line prompt questions that inquirer will run through to create their own logo. They are given a list of shapes they can choose from and also choose the color they'd like for their text and shape color. 

## User Story
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer

## Acceptance Criteria
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered.

## Installation Process
Install VS Code
Install the currect version of Node.js
Initialize Node.js in the terminal
Install the Inquirer package through the terminal
Install the Jest package through the terminal  

## Successes and Challenges
I was very proud that all of my tests were successful with very little errors. I found out through this process that I really enjoy writing test for code, I feel like it made me understand the code even more because you're trying to match two different files and have them work together to make sure that what the developer is writing makes sense and is clean. 
A challenge of mine was trying to decide if I want a lot of files. I was thinking of writing different folders for the text and shape color property. I ended up keeing all of the code in the index.js file to not confuse the files in the code when trying to generate the logo. 
I would like to give credit to Thomas, through his youtube video and repository I was able to understand the assignment more through his code and the functions of his application, I used his code but added my own touch to it as well. His repository is: https://github.com/ThomasCalle/Thomas-Object-Oriented-Programming-SVG-Logo-Maker/tree/main

## License 
MIT License 

## Future Development
Something I would like to add or see added to this application is probably a choice of font styles and more options for shapes. 

## Logo Example

![](./examples/Logoexample.png)

## Walkthrough Video
https://drive.google.com/file/d/11ljDtkZQ0Dt1uyofVFo_WlMbCCKjP2dp/view

