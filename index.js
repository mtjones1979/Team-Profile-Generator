const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./template.js");

let finalTeam = [];

// function teamProfile() {
function addManager () {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'teamName',
            message: 'Managers: Welcome to your Team Generator, to start building your team please pick a Team Name:',
        },
        {
            type: 'input',
            name: 'manName',
            message: 'What is your name?',
        },
        {
            type: 'input',
            name: 'manId',
            message: 'Please enter your ID number:',
        },
        {
            type: 'input',
            name: 'manEmail',
            message: 'Please enter your email:',
        },
        {
            type: 'number',
            name: 'manOfficeNumber',
            message: 'Please enter your Office Number:',
        },
    ])
        .then(function (data) {
            const manager = new Manager(data.teamName, data.manName, data.manId, data.manEmail, data.manOfficeNumber);
            finalTeam.push(manager)
            console.log(manager)
            addTeamMember();
        })
}
  function addTeamMember () {
    inquirer.prompt([
        {
            type: "list",
            message: 'Would you like to add more Team Members?',
            name: "role",
            choices: ["Yes, add an Engineer", "Yes, add an Intern", "No, my team is complete"]
        }
    ])
    .then(function (data) {
        switch(data.role){
            case "Yes, add an Engineer":
                addEngineer();
                break;
            case "Yes, add an Intern":
                addIntern();
                break;
            default:
                teamBuild();
                console.log("You have created your team!");
            }
    })
 
  function addEngineer () {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'enName',
            message: "What is your Engineer's name?",
        },
        {
            type: 'input',
            name: 'enId',
            message: 'Please enter their ID number:',
        },
        {
            type: 'input',
            name: 'enEmail',
            message: 'Please enter their email:',
        },
        {
            type: 'input',
            name: 'enGithub',
            message: 'Please enter their GitHub username:',
        },
    ]) 
    .then(function (data) {
        const engineer = new Engineer(data.enName, data.enId, data.enEmail, data.enGithub)
        finalTeam.push(engineer)
        console.log(engineer)
        addTeamMember()
    });
}
const addIntern = () => {
    inquirer.prompt ([
        {
            type: 'input',
            name: 'inName',
            message: "What is your Intern's name?",
        },
        {
            type: 'input',
            name: 'inId',
            message: 'Please enter their ID number:',
        },
        {
            type: 'input',
            name: 'inEmail',
            message: 'Please enter their email:',
        },
        {
            type: 'input',
            name: 'inSchool',
            message: 'Please enter their School name:',
        },
    ])
    .then(function (data) {
        const intern = new Intern(data.inName, data.inId, data.inEmail, data.inSchool)
        finalTeam.push(intern)
        console.log(intern)
        addTeamMember()
    }); 
}
  }

    function teamBuild(){
      fs.writeFileSync('index.html', generateHTML(finalTeam), function(err){ 
        console.log("We hit an error", err)
      });
    };
      
    addManager();
// }
// teamProfile();

