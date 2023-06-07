
// Questions to ask user, added to define 'questions'
// List of Licensing types with links
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none'){
    return ` ![Github license](https://img.shields.io/badge/license-${license.replace(/ /g,'%20')}-blue.svg)`;
  }
  else {
    return ''
  }
}

// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none'){
    return `\n* [Licensing](#licensing)`
  }
  return ''
}

// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return  `\n## Licensing \n This project is licensed under the ${license} license \n`
  }
  return ''
}

function generateReadMe (data) {
// Generate the template for the readMead
 return  `# ${data.title}
${renderLicenseBadge(data.license)}
## Description
${data.description}

## Table of Contents
* [Description](#description)
* [Usage](#usage)
* [Installation](#installation)${renderLicenseLink(data.license)}
* [Contributing](#contributing)
* [Testing](#testing)
* [Contact me for questions](#contact)

## Installation
${data.installation}

## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contributing
${data.contributing}

## Testing
${data.testing}

## Contact

GitHub
[${data.userGitHub}](https://GitHub.com/${data.userGitHub})\n
Email
${data.userEmail}

`
};
module.exports = generateReadMe
