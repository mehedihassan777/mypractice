var bob = {
    name: 'Bob',
    gender: "Male"
    // `Pick` has only kept name, gender so age and location were removed from the type and they can't be defined here
};
console.log(bob);
var bob2 = {
    name: "Bob",
    age: 20,
    location: "Dhanmondi",
    gender: "Male"
};
console.log(bob2);
