var Person = /** @class */ (function () {
    function Person(name) {
        // name cannot be changed after this initial definition, which has to be either at it's declaration or in the constructor.
        this.name = name;
    }
    Person.prototype.getName = function () {
        return this.name;
    };
    return Person;
}());
var person = new Person("Jane");
//person.name = "Jane2"; (Can not assign read only property)
console.log(person.getName());
