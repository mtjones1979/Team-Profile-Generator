const Engineer = require("./lib/Engineer");

describe("Engineer", () => {
    describe("github", () => {
        it("should return the GitHub username", () => {
            const test = "GitHubUsername";
            const obj = new Engineer("Michael", 1, "m@jones.com", test);
            expect(obj.github).toBe(test);
        });
    });
    describe("getGitHub()", () => {
        it("should call GitHub username through getGitHub()", () => {
            const test = "GitHubUsername";
            const obj = new Engineer("Michael", 1, "m@jones.com", test);
            expect(obj.getGitHub()).toBe(test);
        });
    });
    describe("getRole()", () => {
        it("should return 'Engineer' through getRole()", () => {
            const test = "Engineer";
            const obj = new Engineer("Michael", 1, "m@jones.com", "GitHubUsername");
            expect(obj.getRole()).toBe(test);
        });
    });
});

