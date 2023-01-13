var bob = {
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
};
console.log(bob);
var bob2 = {
    name: "Bob",
    age: 20,
    gender: "Male"
};
console.log(bob2);
