const Intern = require("./lib/Intern");

describe("Intern", () => {
    describe("school", () => {
        it("should return the name of the school", () => {
            const test = "UT";
            const obj = new Intern("Michael", 1, "m@jones.com", test);
            expect(obj.school).toBe(test);
        });
    });
    describe("getSchool()", () => {
        it("should call school through getSchool()", () => {
            const test = "UT";
            const obj = new Intern("Michael", 1, "m@jones.com", test);
            expect(obj.getSchool()).toBe(test);
        });
    });
    describe("getRole()", () => {
        it("should return 'Intern' through getRole()", () => {
            const test = "Intern";
            const obj = new Intern("Michael", 1, "m@jones.com", "UT");
            expect(obj.getRole()).toBe(test);
        });
    });
});