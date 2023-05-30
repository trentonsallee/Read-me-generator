
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a descritption of the project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is usage for this project?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please enter the contributors for this project.'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'what is the testing procedure'
    },
    {
        type: 'list',
        name: 'license',
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
            'none'
        ],
    },
    {
        type: 'input',
        name: 'userGitHub',
        message: 'enter your GitHub user name.'
    },
    {
        type: 'input',
        name: 'userEmail',
        message: 'what is your email?'
    }
];


module.exports = questions
