// TODO: Include packages needed for this application
const fs = require("fs") 
const path = require("path")
const inquirer = require("inquirer")
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'title of the project'
    },
    { 
        type: 'input',
        name: 'description',
        message:'write description of the project'

    },
    {
        type: 'input',
        name: 'tests',
        message: 'what command should be run to run tests?',
        default: 'npm test'

    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install this project?'

    },
    {
        type: 'input',
        name: 'usage',
        message: 'Prodive instructions and exmaples for use'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators and links if they were used'
    },
    {
        type: 'list',
        choices: ['MIT','GPLv3','GNU AGPLv3','Boost Software License 1.0','none']  ,
        name: 'license',
        message: 'how will being using the code?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'what is your github name?'
    }

];
 
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) =>{
        writeToFile("readme.md", generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();
