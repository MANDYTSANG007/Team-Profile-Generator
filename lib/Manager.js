//Import the Employee parent class 
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email)
        this.officeNumber = officerNumber;
    }

    getName();

    getId();

    getEmail();

    getRole(); //overridden to return "Manager"
}

module.exports = Manager;