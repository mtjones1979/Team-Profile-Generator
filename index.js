const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatedHTML = require("./template.js");

let finalTeam = [];

function startingPrompt () {
    inquirer.prompt([
        {
            message: "Managers: Welcome to your Team Generator, to start building your team please pick a Team Name:",
            name: "teamname"
        }
    ])
    .then(function(data){
        const teamName = data.teamname
        finalTeam.push(teamName)
        addManager();
    })
}
function addManager () {
    inquirer.prompt ([
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
            type: 'number',
            name: 'officeNumber',
            message: 'Please enter your Office Number:',
        },
    ])
        .then(function (data) {
            const name = data.name
            const id = data.id
            const email = data.email
            const officeNumber = data.officeNumber
            const teamMember = new Manager(name, id, email, officeNumber)
            finalTeam.push(teamMember)
            addTeamMember();
        })
}
  function addTeamMember () {
    inquirer.prompt([
        {
            type: "list",
            message: 'Would you like to add more Team Members?',
            name: "addMember",
            choices: ["Yes, add an Engineer", "Yes, add an Intern", "No, my team is complete"]
        }
    ])
    .then(function (data) {
        switch(data.addMember){
            case "Yes, add an Engineer":
                addEngineer();
                break;
            case "Yes, add an Intern":
                addIntern();
                break;
            // case "No, my team is complete":
            //     // teamBuild();
            //     break;
            default:
                // teamBuild();
        }
    })
 
  function addEngineer () {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is your Engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter their ID number:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter their email:',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter their GitHub username:',
        },
    ]) 
    .then(function (data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const github = data.github
        const teamMember = new Engineer(name, id, email, github)
        finalTeam.push(teamMember)
        addTeamMember()
    });
}
const addIntern = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is your Intern's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: 'Please enter their ID number:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter their email:',
        },
        {
            type: 'input',
            name: 'school',
            message: 'Please enter their School name:',
        },
    ])
    .then(function (data) {
        const name = data.name
        const id = data.id
        const email = data.email
        const school = data.school
        const teamMember = new Intern(name, id, email, school)
        finalTeam.push(teamMember)
        addTeamMember()
    });
 }
  }
//  function teamBuild(){
//       fs.writeFile('index.html', generatedHTML(data), function(err){});
//  }
startingPrompt()
