const inquirer = require('inquirer');
const fs =require ('fs');
const  {Circle, Triangle, Square} = require("./lib/shapes");

const questions = [
    {
        type: "input",
        message: "Please enter up to three characters",
        name: "text"
    },
    {
        type: "input",
        message: "Please enter a color for the text inside the logo",
        name: "textColor"
    },
    {
        type: "input",
        message: "Please enter a shape, either circle, square, or triangle",
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

    // showing that i am using inheritance even though not using shapreChoiceInheritance after the if-else-else block
    let shapeChoiceInheritance = undefined;
    if (responses.shape === "circle") {
      shapeChoiceInheritance = new Circle (); 
      htmlLogoString += `<circle cx="150" cy="115" r="80" fill="${responses.shapeColor}"/>`;
    }
    else if (responses.shape === "triangle") {
      shapeChoiceInheritance = new Triangle();
      htmlLogoString += `<polygon points="150, 18 244, 182 56, 182" fill="${responses.shapeColor}"/>`;
    }
    else {
      shapeChoiceInheritance = new Square();
      htmlLogoString += `<rect x="73" y="40" width="160" height="160" fill="${responses.shapeColor}"/>`;
    }

    htmlLogoString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${responses.textColor}">${responses.text}</text>`;
    htmlLogoString += "</g>";
    htmlLogoString += "</svg>";

    fs.writeFile(logoFilename, htmlLogoString, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("logo.svg generated! Please check.");
        }
      });
}

// using inquirer module that was npm installed and will call .prompt and .then to deal with user input on command line and deal with them
function getUserInputAndTakeAction() {
    inquirer.prompt(questions).then(responses => {createLogo(responses, "logo.svg");});
}

getUserInputAndTakeAction();
