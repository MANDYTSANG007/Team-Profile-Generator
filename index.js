//Import fs module using require
const fs = requirer("fs");
const inquirer = requirer("inquirer");

const Manager = require(".lib/Manager");
const Engineer = require(".lib/Engineer");
const Intern = require(".lib/Intern");

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
        choice: ["Engineer", "Intern", "Finish building my team"]
    }
];

//initiate the app by asking for manager information and create a manager object
function init() {
    inquirer.prompt(newManager)
    .then((employeeAnswer) => {
        const newEmployee = new Manager(employeeAnswer.name, employeeAnswer.id, employeeAnswer.email, employeeAnswer.officeNumber);
        employees.push(newEmployee);                //pushing newEmployee to the employees array 
        askNext();
    })
};

//start the app
init();

//add the next employee and prompt to create an employee object
const askNext = () => {
    return init("nextEmployee")
    .then((employeeAnswer) => {
        if (employeeAnswer.role === "Engineer") {
            init("newEngineer")
            .then((employeeAnswer) => {
                const newEmployee = new Engineer(employeeAnswer.name, employeeAnswer.id, employeeAnswer.email, employeeAnswer.github);
                employees.push(newEmployee);
                askNext();
            })
        }
    })
}