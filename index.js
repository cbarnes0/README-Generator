
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Please provide installation instructions:',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please provide usage information:',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please provide contribution guidelines:',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please provide test instructions:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license would you like to use for your project?',
    choices: ['MIT', 'Apache', 'GPL', 'BSD', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('README file generated successfully!');
    }
  });}

function init() {
  inquirer.prompt(questions)
  .then((data) => {
    const markdown = generateMarkdown(data);

    writeToFile('README.md', markdown);
  })
  .catch((error) => {
    console.log(error);
  });
}

// Function call to initialize app
init();