const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


// const api = require('./utils/api');
const generateMarkdown = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = [
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
        message: "If applicable, Describe the steps required to install your project for the Installation section.",
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
        choices: ['Apache License 2.0', 'MIT License','No license'],
        name: 'license'
    },
    {
        type: 'input',
        message: "What is your git repository name?",
        name: 'repo',
    },
    {
        type: 'input',
        message: "What is your email address?",
        name: 'Email',
    },

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

        console.log("Generating Your README ...");
        const generated = generateMarkdown(Response);
        console.log(generated);

        await writeFileAsync('Generated-README.md', generated);
    } catch (error) { 
        console.log(error);
    }
};

// function call to initialize program
init();
