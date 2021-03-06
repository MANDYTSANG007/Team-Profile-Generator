//Import fs module using require
const fs = require("fs");
const inquirer = require("inquirer");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const generate = require("./dist/htmlGenerate.js");
//store employee objects as they are created
const employees = [];

// inquirer questions
const newManager = [
    {
        type: "input",
        message: "What is the manager's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the manager's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the manager's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "officeNumber"
    },
];

const newEngineer = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the engineer's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the engineer's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the engineer's GitHub username ?",
        name: "github"
    },
];

const newIntern = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is the intern's ID?",
        name: "id"
    },
    {
        type: "input",
        message: "What is the intern's email?",
        name: "email"
    },
    {
        type: "input",
        message: "What is the intern's school?",
        name: "school"
    },
];

const nextEmployee = [
    {
        type: "list",
        message: "What employee would you like to add next?",
        name: "role",
        choices: ["Engineer", "Intern", "Finish building my team"]
    }
];

//initiate the app by asking for manager information and create a manager object
function init(role) {
    return inquirer.prompt(role)
    .then((employeeAnswer) => {
        const newEmployee = new Manager(employeeAnswer.name, employeeAnswer.id, employeeAnswer.email, employeeAnswer.officeNumber);
        employees.push(newEmployee);                //pushing newEmployee to the employees array 
        askNext()
    })
};

//start the app
init(newManager);

//add the next employee and prompt to create an employee object
const askNext = () => {
    inquirer.prompt(nextEmployee)
    .then((employeeAnswer) => {
        if (employeeAnswer.role === "Engineer") {
            inquirer.prompt(newEngineer)
            .then((employeeAnswer) => {
                const newEmployee = new Engineer(employeeAnswer.name, employeeAnswer.id, employeeAnswer.email, employeeAnswer.github);
                employees.push(newEmployee);
                askNext();
            })
        }else if (employeeAnswer.role === "Intern") {
            inquirer.prompt(newIntern)
            .then((employeeAnswer) => {
                const newEmployee = new Intern(employeeAnswer.name, employeeAnswer.id, employeeAnswer.email, employeeAnswer.school);
                employees.push(newEmployee);
                askNext();
            })
        }else {
            console.log("Team Profile Completed...rendering a team profile page");
            
            let html = generate(employees);
            writeProfile("teamProfile.html", html);
            console.log(employees)
        }
    });
};

function writeProfile(fileName, data){
    fs.writeFile(fileName, data, (err) =>{
        if (err) {
            console.log(err);
        }
    })
};