//import from the Employee class
const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("Initialization", () => {
        //Arrange
        it("should return an object", () => {
            //Act
            const EmployeeObj = new Employee();
            //Assert
            expect(typeof(EmployeeObj)).toBe("object");
        });
        it("should return a name", () => {
            const testName = "Mandy";
            const employeeName = new Employee(testName);
            expect(employeeName.name).toBe(testName);
        });
        it("should return an id", () => {
            const testID = 12345;
            const employeeId = new Employee("Mandy", testID);
            expect(employeeId.id).toBe(testID);
        });
        it("should return an email", () => {
            const testEmail = "mandy@test.com";
            const employeeEmail = new Employee("Mandy", 12345, testEmail);
            expect(employeeEmail.email).toBe(testEmail);
        });
        it("should return a name from getName()", () => {
            const testName = "Mandy";
            const employeeName = new Employee(testName);
            expect(employeeName.getName()).toBe(testName);
        });
        it("should return an id from getID()", () => {
            const testID = 12345;
            const employeeId = new Employee("Mandy", testID);
            expect(employeeId.getID()).toBe(testID);
        });
        it("should return an email from getEmail()", () => {
            const testEmail = "mandy@test.com";
            const employeeEmail = new Employee("Mandy", 12345, testEmail);
            expect(employeeEmail.getEmail()).toBe(testEmail);
        });
        it("should return 'Employee' from getRole()", () => {
            const testRole = "Employee";
            const employeeRole = new Employee("Mandy", 12345, "mandy@test.com");
            expect(employeeRole.getRole()).toBe(testRole);
        });
    });
});