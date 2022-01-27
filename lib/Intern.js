//Import the Employee parent class 
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
        this.role = "Intern";
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

    getSchool() {
        return this.school;
    };

    getRole() {
        return "Intern";
    };          //overridden to return "Intern"
}

module.exports = Intern;