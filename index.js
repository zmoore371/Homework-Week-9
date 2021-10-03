// TODO: Include packages needed for this application

const Choices = require("inquirer/lib/objects/choices");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name:"installation",
        message: "What are the installation instructions? ('n' for none)"
    }, {
        type: "input",
        name: "usage",
        message: "What is the usage of this application?"
    }, {
        type: "list",
        message: "Which license would you like to apply?",
        choices: ["none", "MIT", "GNU General Public License 2.0", "Apache License 2.0"]
    }, {
        type: "input",
        name: "contributors",
        message: "Were there any other contributers to this project? If so list them here. ('n' for none)"
    }, {
        type: "input", 
        name: "tests", 
        message: "What kind of tests did you put your application through?"
    }, {
        type: "input",
        name: "user",
        message: "Github Username: "
    }, {
        type: "input", 
        name: "email",
        message: "Email address: "
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
