const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


const api = require('./utils/api');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
    {
        type: 'input',
        message: "What is your GitHub username? (No @ needed)",
        name: 'username',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    }, 
    {
        type: 'input',
        message: "What is the name of your GitHub repo?",
        name: 'repo',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub repo is required for a badge.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "What is the title of your project?",
        name: 'title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "If applicable, describe the steps required to install your project for the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['Apache License 2.0', 'MIT License','The Unlicense'],
        name: 'license'
    }

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => { 
        if (err) { 
            return console.log(err);
        }
        console.log("Your README.md file has been generated Successfully!")
    })
}

const writeFileAsync = util.promisify(writeToFile);

// function to initialize program
async function init() {
    try {
        const Response = await inquirer.prompt(questions);
        console.log("User Response: ", Response);

        const info = await api.getUser(Response);
        console.log("User Git Hub user info: ", info);

        console.log("Generating Your README ...");
        const generated = generateMarkdown(Response, info);
        console.log(generated);

        await writeFileAsync('Generated-README.md', generated);
    } catch (error) { 
        console.log(error);
    }
};

// function call to initialize program
init();
