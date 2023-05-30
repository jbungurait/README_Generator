const fs = require('fs');
const inquirer = require('inquirer');
const genMarkdown = require('./utils/generateMarkdown');
const fileName = 'README.md';


// TODO: Create an array of questions for user input
const  questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the What, Why, and How:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your package?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How will the application be used?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List the credits for the application:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license:',
        choices: [ 
            'MIT License', 
            'Eclipse Public License 2.0', 
            'GNU Affero General Public Livense v3.0', 
            'GNU General Public License v2.0', 
            'Mozilla Public License 2.0', 
            'The Unlicense' ],
    },
    {
        type: 'input',
        name: 'features',
        message: 'List the features of your app.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'How can other users contribute to the development?',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'How will the application be tested?',
        response: '',
    },
];


function init() {
    inquirer.prompt(questions).then((response) => {
        fs.writeFile(fileName, 
        genMarkdown(response), 
        (err) => err ? console.log(err) : console.log("File generated!"))
    })
        
    }


init();
