const inquirer  = require('inquirer');
const genMarkdown = require('./utils/generateMarkdown');

class userInfo {
    constructor() {
        this.title = '';
        this.decsription = '';
        this.tableOfContentes = '';
        this.installation = '';
        this.usage = '';
        this.credits = [];
        this.license = '';
        this.features = '';
        this.contribution = '';
        this.tests = '';
    }
  
    questions = [
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
            name: 'tableOfContents',
            message: 'What are the Contents of the README.md file?',
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
            choices: ['Apache', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public Livense v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense',],
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
    
    run() {
            inquirer.prompt([this.questions])
            .then(({ title }) => {
                this.title.push(title);
             }).then(({ decsription }) => {
                this.decsription.push(decsription);
             }).then(({ tableOfContentes }) => {
                this.tableOfContentes.push(tableOfContentes);
             }).then(({ installation }) => {
                this.installation.push(installation);
             }).then(({ usage }) => {
                this.usage.push(usage);
             }).then(({ credits }) => {
                this.credits.push(credits);
             }).then(({ license }) => {
                this.license.push(license); 
             }).then(({ features }) => {
                this.features.push(features);
             }).then(({ contribution }) => {
                this.contribution.push(contribution);
             }).then(({}))
        
       

    )}
;
};
