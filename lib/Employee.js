// this will be where I set up shared properties
// engineer, manager and intern will all have shared things in this file
// remember to export classes (constructor function files)
// export each individual class to the app.js
// this is also where I will store common functions that apply to call classes


class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    getRole(){
        return "Employee";
    }
}

module.exports = Employee;