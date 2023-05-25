// TODO: Include packages needed for this application

const genMark = require('./utils/generateMarkdown');
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        inputType: 'input',
        sectionName: 'title',
        message: 'What is the project title?'
    },
    {
        inputType: 'input',
        sectionName: 'description',
        message: 'Enter a descritption of the project.'
    },
    {
        inputType: 'input',
        sectionName: 'installation',
        message: 'Enter installation instructions.'
    },
    {
        inputType: 'input',
        sectionName: 'usage',
        message: 'What is usage for this project?'
    },
    {
        inputType: 'input',
        sectionName: 'contributing',
        message: 'Please enter the contributors for this project.'
    },
    {
        inputType: 'input',
        sectionName: 'testing',
        message: 'what is the testing procedure'
    },
    {
        inputType: 'checkbox',
        sectionName: 'licence',
        message: 'Please select a license.',
        checkboxOptions: []
    },
    {
        inputType: 'input',
        sectionName: 'userGitHub',
        message: 'enter your GitHub user name.'
    },
    {
        inputType: 'input',
        sectionName: 'userEmail',
        message: 'what is your email?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, genMark(data), (err) => err ? console.error(err) :console.log('ReadMe sucessfully generated'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
        .then(response => {
            writeToFile('README.md', response)
        });
}

// Function call to initialize app
init();
