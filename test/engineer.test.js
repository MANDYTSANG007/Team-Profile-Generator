const Engineer = require ("../lib/Engineer");

describe ("Engineer", () => {
    it("should set a GitHub username", () => {
        const testGitHub = "GitHubUserName";
        const engineerGitHub = new Engineer("Mandy", 12345, "mandy@test.com", testGitHub);
        expect(engineerGitHub.github).toBe(testGitHub); 
    });
    it("should get a GitHub username from getGithub()", () => {
        const testGitHub = "GitHubUserName";
        const engineerGitHub = new Engineer("Mandy", 12345, "mandy@test.com", testGitHub);
        expect(engineerGitHub.getGithub()).toBe(testGitHub);
    });
    it("should return 'Engineer' from getRole()", () => {
        const testRole = "Engineer";
        const engineerRole = new Engineer("Mandy", 12345, "mandy@test.com", testRole);
        expect(engineerRole.getRole()).toBe(testRole);
    });
})