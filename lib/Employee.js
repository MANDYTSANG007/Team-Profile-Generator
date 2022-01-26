//parent class with name, id, and email properties
class Employee { 
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getName();
    getID();
    getEmail();
    getRole(); //this function returns "Employee"
}
module.exports = Employee;