//parent class with name, id, and email properties
class Employee { 
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getName() {
        return this.name;
    };

    getID() {
        return this.id;
    };
    
    getEmail() {
        return this.email;
    };
    
    //this function returns "Employee"
    getRole() {
        return "Employee";
    }
}
module.exports = Employee;