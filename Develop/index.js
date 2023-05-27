
// Questions to ask user
const readMeQuestions = require('./utils/readMeQuestions');

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
             writeToFile('readMETemplate.md', response)
             console.log('ReadMe sucessfully Created')
            });
}

// Function call to initialize app
init();


//help make work

//help line 52 read me

//help deploy active app on github