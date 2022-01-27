//Import the Employee parent class 
const Employee = require("./Employee");

//Create a Engineer class that extends the Employee class
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email)
        this.github = github;
    }

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getGithub() {
        return this.github;
    };

    //overriden to return "Engineer"
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;