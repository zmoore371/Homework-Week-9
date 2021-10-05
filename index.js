// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const generateMarkdown = require("./utils/generateMarkdown")



// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
    },{
        type: "input",
        name: "description",
        message: "Give a breif description of your project: "   
    }, {
        type: "input",
        name:"installation",
        message: "What are the installation instructions? ('n' for none)"
    }, {
        type: "input",
        name: "usage",
        message: "What is the usage of this application?"
    }, {
        type: "list",
        name: "license",
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
function writeToFile(fileName, data) {
    // console.log(fileName, data)
    // generateMarkdown(data);
    

    fs.writeFile(fileName, generateMarkdown(data), (err) => 
        err ? console.log(err) : console.log("success!")
    )
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            // let generate = generateMarkdown(data)
            // console.log(generate)
            // fs.writeFile(generateMarkdown(data))
            console.log(data);
            writeToFile("readme.md", data)

        })
}

// Function call to initialize app
init();
