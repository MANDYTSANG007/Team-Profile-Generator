//Import the Employee parent class 
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    getName();

    getId();

    getEmail();

    getGithub();

    getRole();  //overriden to return "Engineer"
}

module.exports = Engineer;