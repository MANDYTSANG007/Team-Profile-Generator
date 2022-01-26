//Import the Employee parent class 
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }

    getName();

    getId();

    getEmail();

    getSchool();

    getRole();          //overridden to return "Intern"
}

module.exports = Intern;