const fs = require('fs');
const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const generateMarkdown = require("./utils/generateMarkdown")

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
        message: "What are the installation instructions?"
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
        message: "List the contributors to this software:"
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


function writeToFile(fileName, data) {

    fs.writeFile(fileName, generateMarkdown(data), (err) => 
        err ? console.log(err) : console.log("success!")
    )
}


function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            console.log(data);
            writeToFile("readme.md", data)

        })
}

init();
