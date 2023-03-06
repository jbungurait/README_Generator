const inquirer  = require('inquirer');
const fs = require('fs');
const fileName = 'README.md';
const genMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'Title',
            message: 'What is the title of your project?',
            response: '',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Describe the What, Why, and How:',
            response: '',
        },
        {
            type: 'input',
            name: 'TableOfContents',
            message: 'What are the Contents of the README.md file?',
            response: '',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'What are the steps required to install your package?',
            response: '',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'How will the application be used?',
            response: '',
        },
        {
            type: 'input',
            name: 'Credits',
            message: 'List the credits for the application:',
            response: '',
        },
        {
            type: 'list',
            name: 'License',
            message: 'Select a license:',
            choices: ['Apache', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public Livense v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense',],
            response: '',
        },
        {
            type: 'input',
            name: 'Features',
            message: 'List the features of your app.',
            response: '',
        },
        {
            type: 'input',
            name: 'Contribution',
            message: 'How can other users contribute to the development?',
            response: '',
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'How will the application be tested?',
            response: '',
        },
];

// TODO: Create a function to write README file
function writeToFile(fileName, userInput) {

    // const Body = `${userInput.Title} \t 
    // Description: \t ${userInput.Description} \t 
    // Table of Contents: \t ${userInput.TOC} \t
    // Installation: \t ${userInput.Install} \t
    // Usage: \t ${userInput.Usage} \t
    // Credits: \t ${userInput.Credits} \t
    // License: \t ${userInput.License} \t
    // Features: \t ${userInput.Features} \t
    // Contributions: \t ${userInput.Contribution} \t
    // Testing: \t ${userInput.Tests}\t`;

    // fs.writeFile(fileName, Body,
    // (err) => err ? console.error(err) : console.log('Success!'));

};

// TODO: Create a function to initialize app
function init() {
    for (const question of questions) {
            inquirer.prompt([question]).then((answer) => 
                question.response = answer)
            }

            } 



//    const writeFile = new writeToFile();
//    writeFile(`${fileName}`, userInput);


// Function call to initialize app
init();
