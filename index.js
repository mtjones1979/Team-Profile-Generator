const inquirer = require("inquirer");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatedHTML = require("./template.js");
const fs = require("fs");
const { writeFileSync } = require("jest-serializer");


// function createTeam() {

    const managerQuestions = () => {
        console.log("Hello Manager!! Please build your team");
        return inquirer.prompt ([
            {
                type: 'input',
                name: 'name',
                message: 'What is your name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please enter your ID number:',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter your email:',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'Please enter your Office Number:',
            },
        ])
        // . then(responses => {
        //   const manager = new Manager(responses.name, responses.id, responses.email, reponses.officeNumber);
        //  })
    }
    // const employeeChoice = () => {
    //     return inquirer.prompt ([
    //         {
    //             type: 'list',
    //             name: 'employee',
    //             message: 'Which type of Team Member do you want to add?',
    //             choices: [
    //                 "Engineer",
    //                 "Intern",
    //                 "I don't want to add anymore Team Members"
    //             ]
    //         }
    //     ])
    // }
    // const engineerQuestions = () => {
        
    //     return inquirer.prompt ([
    //         {
    //             type: 'input',
    //             name: 'name',
    //             message: "What is your Engineer's name?",
    //         },
    //         {
    //             type: 'input',
    //             name: 'id',
    //             message: 'Please enter their ID number:',
    //         },
    //         {
    //             type: 'input',
    //             name: 'email',
    //             message: 'Please enter their email:',
    //         },
    //         {
    //             type: 'input',
    //             name: 'github',
    //             message: 'Please enter their GitHub username:',
    //         },
    //     ])
    // }
    // const internQuestions = () => {
        
    //     return inquirer.prompt ([
    //         {
    //             type: 'input',
    //             name: 'name',
    //             message: "What is your Intern's name?",
    //         },
    //         {
    //             type: 'input',
    //             name: 'id',
    //             message: 'Please enter their ID number:',
    //         },
    //         {
    //             type: 'input',
    //             name: 'email',
    //             message: 'Please enter their email:',
    //         },
    //         {
    //             type: 'input',
    //             name: 'school',
    //             message: 'Please enter their School name:',
    //         },
    //     ])
    // }
// }
const init = () => {
    managerQuestions()
    .then((responses => writeFileSync('index.html', generatedHTML(responses))))
    .then(() => console.log('Successfully inputted your team!'))
    .catch((err) => console.log(err))
}
init();