const Intern = require("../lib/Intern");

describe("Intern", () => {
    it("should set school", () => {
        const testSchool = "UCLA";
        const internSchool = new Intern("Mandy", 12345, "mandy@test.com", testSchool);
        expect(internSchool.school).toBe(testSchool);
    })
    it("should get school from getSchool()", () => {
        const testSchool ="UCLA";
        const internSchool = new Intern("Mandy", 12345, "mandy@test.com", testSchool);
        expect(internSchool.getSchool()).toBe(testSchool);
    })
    it("should return 'Intern' from getRole()", () => {
        const testRole = "Intern";
        const internRole = new Intern("Mandy", 12345, "mandy@test.com", "UCLA", testRole);
        expect(internRole.getRole()).toBe(testRole);
    });
})