const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("name", () => {
        it("should return the name inputted", () => {
            const name = "Michael";
            const obj = new Employee(name);
            expect(obj.name).toBe(name);
        });
    });
    describe("id", () => {
        it("shoud return the id 'number' inputted", () => {
            const test = 1;
            const obj = new Employee("Michael", test);
            expect(obj.id).toBe(test);
        });
    });
    describe("email", () => {
        it("should return the email when inputted", () => {
            const test = "m@jones.com";
            const obj = new Employee("Michael", 1, test);
            expect(obj.email).toBe(test);
        });
    });
    describe("getName()", () => {
        it("should call name through getName()", () => {
            const test = "Michael";
            const obj = new Employee(test);
            expect(obj.getName()).toBe(test);
        });
    });
    describe("getId()", () => {
        it("shoud call id through getId()", () => {
            const test = 1;
            const obj = new Employee("Michael", test);
            expect(obj.getId()).toBe(test);
        });
    });
    describe("getEmail()", () => {
        it("should call email through getEmail()", () => {
            const test = "m@jones.com";
            const obj = new Employee("Michael", 1, test);
            expect(obj.getEmail()).toBe(test);
        });
    });
    describe("getRole()", () => {
        it("should return 'Employee' through getRole()", () => {
            const test = "Employee";
            const obj = new Employee("Michael", 1, "m@jones.com");
            expect(obj.getRole()).toBe(test);
        });
    });
});

