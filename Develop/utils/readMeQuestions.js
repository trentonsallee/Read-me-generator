
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
        choices: [
            'Apache 2.0',
            'BSD 3-Clause',
            'Eclipse Public License 1.0',
            'GNU GPL v3',
            'ISC',
            'MIT',
            'MPL 2.0',
            'Unlicense',
        ],
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


//module.exports = readMeQuestions;
