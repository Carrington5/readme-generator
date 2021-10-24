// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![github license](https://img.shields.io/badge/license-${license}-red.svg)`
  }
    return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `[license](#license)`
  }
    return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return  `## License
    this project has a license of ${license}`
  }
    return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * ${renderLicenseLink(data.license)}
  * [Tests](#tests)
  * [Questions](#questions)

  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
 
  ## Credits
  ${data.credits}
  ${renderLicenseSection(data.license)}
  ## Tests
  ${data.tests}
  ## Questions
  ![${data.github}](https://github.com/${data.github})

`;
}

module.exports = generateMarkdown;
