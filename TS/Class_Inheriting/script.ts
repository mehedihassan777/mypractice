class Person {
    constructor(name) {
        console.log(name + " Person Constructor");
    }

    getID() {
        return 10;
    }
}

class Employee extends Person {
    constructor(name) {
        super(name);
        console.log(name + " Employee Constructor");
    }

    getID() {
        return super.getID();
    }
}

let e = new Employee("Mehedi Hassan");
console.log(e.getID());