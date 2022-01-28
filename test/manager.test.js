const Manager = require("../lib/Manager");

describe ("Manager", () => {
    it("should set an office number", () => {
        const testOfficeNumber = 123;
        const managerOfficeNum = new Manager("Mandy", 12345, "mandy@test.com", testOfficeNumber);
        expect(managerOfficeNum.officeNumber).toBe(testOfficeNumber);
    });
    it("should return a role from getRole()", () => {
        const testRole = "Manager";
        const managerRole = new Manager("Mandy", 12345, "mandy@test.com", 123);
        expect(managerRole.getRole()).toBe(testRole);
    });
})

