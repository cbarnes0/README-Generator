// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
      return '![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)';
    } else if (license === 'Apache 2.0') {
      return '![Apache License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    } else if (license === 'GPLv3') {
      return '![GPLv3 License](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    } else if (license === 'ISC') {
      return '![ISC License](https://img.shields.io/badge/License-ISC-blue.svg)';
    } else {
      return '';
    }
  }
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) {
    if (license === 'MIT') {
      return 'https://opensource.org/licenses/MIT';
    } else if (license === 'Apache 2.0') {
      return 'https://opensource.org/licenses/Apache-2.0';
    } else if (license === 'GPLv3') {
      return 'https://www.gnu.org/licenses/gpl-3.0';
    } else if (license === 'ISC') {
      return 'https://opensource.org/licenses/ISC';
    } else {
      return '';
    }
  }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license !== "None") {
      return `## License
  
  This project is licensed under the ${license} license. Click [here](${renderLicenseLink(license)}) for more information.
  
  `;
    }
    return "";
  }
  
  // TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
      const { title, description, installation, usage, contributing, tests, license, github, email } = data;
    
return `# ${title}
    
![License](https://img.shields.io/badge/license-${license}-blue.svg)
    
## Description
    
${description}
    
## Table of Contents
    
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)
    
## Installation
    
${installation}
    
## Usage
    
${usage}
    
## Contributing
    
${contributing}
    
## Tests
    
${tests}
    
## License
    
This project is licensed under the ${license} license.
    
## Questions
    
If you have any questions, please contact me at ${email}. You can also check out my GitHub profile at https://github.com/${github}.
`;
    }
  
  module.exports = generateMarkdown;