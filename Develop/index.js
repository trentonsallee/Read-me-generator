// TODO: Include packages needed for this application

const { default: Choices } = require("inquirer/lib/objects/choices");



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
        sectionName: 'tests',
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
