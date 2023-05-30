
// Questions to ask user
const questions = require('./utils/readMeQuestions');
const generateReadMe = require('./utils/readMeTemplate');

// Answers printed into template
const readMeTemplate = require('./utils/readMeTemplate');

// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Function to initialize app
function init() {
       inquirer
        .prompt(questions)
          .then(response => {
             fs.writeFileSync('README.md', generateReadMe(response));
             console.log('ReadMe sucessfully Created')
            });
}

// Function call to initialize app
init();
