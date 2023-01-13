interface Person {
    name: string;
    age: number;
    gender: string;
    location?: string;
}

const bob: Omit<Person, 'age' | 'location' | 'gender'> = {
    name: 'Bob'
    // `Omit` has removed age and location from the type and they can't be defined here
};
console.log(bob);
const bob2: Person = {
    name: "Bob",
    age: 20,
    gender: "Male"

};

console.log(bob2);