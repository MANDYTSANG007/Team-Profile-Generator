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
    });
});