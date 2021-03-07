const Manager = require("./lib/Manager");

describe("Manager", () => {
    describe("officeNumber", () => {
        it("should return the office number of the Manager", () => {
            const test = 10;
            const obj = new Manager("Michael", 1, "m@jones.com", test);
            expect(obj.officeNumber).toBe(test);
        });
    });
    describe("getOfficeNumber()", () => {
        it("should call office number through getOfficeNumber()", () => {
            const test = 10;
            const obj = new Manager("Michael", 1, "m@jones.com", test);
            expect(obj.getOfficeNumber()).toBe(test);
        });
    });
    describe("getRole()", () => {
        it("should return 'Manager' through getRole()", () => {
            const test = "Manager";
            const obj = new Manager("Michael", 1, "m@jones.com", 10);
            expect(obj.getRole()).toBe(test);
        });
    });
});