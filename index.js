const inquirer = require('inquirer');
const fs =require ('fs');
const  {Circle, Triangle, Square} = require("./lib/shapes");

const questions = [
    {
        type: "input",
        message: "Please enter up too three characters",
        name: "text"
    },
    {
        type: "input",
        message: "Please enter a color keyword (Or a hexadecimal number)",
        name: "textColor"
    },
    {
        type: "input",
        message: "Please enter a shape, either Circle, Square, or Triangle",
        name: "shape"
        
    },
    {
        type: "input",
        message: "Please enter a color for your shape",
        name: "shapeColor"
        
    }
];

// will take responses from user input and create the right logo based on user's answers called logo.svg
function createLogo(responses, logoFilename) {
    // crafting this string which is html code under the hood, based on different user inputs captured in responses 
    let htmlLogoString = "";
    // need to capture html code as a string as we want this program to generate the right logo
    htmlLogoString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    htmlLogoString += "<g>";
    htmlLogoString += `${responses.shape}`;

    let shapeChoiceInheritance = undefined;
    if (responses.shape === "Circle") {
      shapeChoiceInheritance = new Circle (); 
      htmlLogoString += `<circle cx="150" cy="115" r="80" fill="${responses.shapeBackgroundColor}"/>`;
    }
    else if (responses.shape === "Triangle") {
      shapeChoiceInheritance = new Triangle();
      htmlLogoString += `<polygon points="150, 18 244, 182 56, 182" fill="${responses.shapeBackgroundColor}"/>`;
    }
    else {
      shapeChoiceInheritance = new Square();
      htmlLogoString += `<rect x="73" y="40" width="160" height="160" fill="${responses.shapeBackgroundColor}"/>`;
    }
    // TODO: add remaining code to complete html logo string and also use fs.WriteFile after that

}

// using inquirer module that was npm installed and will call .prompt and .then to deal with user input on command line and deal with them
function getUserInputAndTakeAction() {
    inquirer.prompt(questions).then(responses => {createLogo(responses, "logo.svg");});
}

getUserInputAndTakeAction();
