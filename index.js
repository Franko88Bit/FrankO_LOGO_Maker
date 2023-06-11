const inquirer = require('inquirer');

const questions = [
    {
        type: "input",
        message: "Please enter up too three characters"
    },
    {
        type: 'input',
        message: "Please enter a color keyword (Or a hexadecimal number)",
        
    },
    {
        type: 'input',
        message: "Please enter a shape, either circle, square, or triangle",
        
    },
    {
        type: 'input',
        message: "Please enter a color for your shape",
        
    }
];

const userResponses =  inquirer.prompt(questions);