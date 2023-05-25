// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

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
${data.instalation}

## Usage
${data.usage}

## Licensing
${renderLicenseBadge(data.license)}

${renderLicenseLink(data.license)}

${renderLicenseSection(data.license)}

## Constributing
${data.contributing}

## testings
${data.testing}

Contact me for questions

GitHub
> ${data.userGitHub}
Email
> ${data.userEmail}

`;
}

module.exports = generateMarkdown;
