
// Questions to ask user, added to define 'questions'
const readMeQuestions = require('./readMeQuestions');

// List of Licensing types with links
const licensingType = {
  'Apache 2.0': 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
  'BSD 3-Clause':
      'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
  'Eclipse Public License 1.0':
      'https://img.shields.io/badge/License-EPL_1.0-red.svg',
  'GNU GPL v3': 'https://img.shields.io/badge/License-GPLv3-blue.svg',
  ISC: 'https://img.shields.io/badge/License-ISC-blue.svg',
  MIT: 'https://img.shields.io/badge/License-MIT-yellow.svg',
  'MPL 2.0': 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
  Unlicense: 'https://img.shields.io/badge/license-Unlicense-blue.svg',
};

// Generate the template for the readMead
 `# ${questions.title}

## Description
${questions.description}

## Table of Contents
* Description #(description)
* Table of Contents #(usage)
* Installation #(license)
* Usage #(usage)
* licensing #(license)
* Constributing #(contributing)
* Testing #(test)
* Contact me for questions #(contact)

## Installation
${questions.instalation}

## Usage
${questions.nameusage}

## Licensing
${questions.licensingType}

## Constributing
${questions.contributing}

## testings
${questions.nametesting}

Contact me for questions

GitHub
> ${questions.userGitHub}
Email
> ${questions.userEmail}
`

//module.exports = readMeTemplate;