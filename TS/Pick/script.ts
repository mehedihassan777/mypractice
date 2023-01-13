interface Person {
    name: string;
    age: number;
    gender: string;
    location?: string;
}

const bob: Pick<Person, 'name' | 'gender'> = {
    name: 'Bob',
    gender: "Male"
    // `Pick` has only kept name, gender so age and location were removed from the type and they can't be defined here
};

console.log(bob);

const bob2: Person = {
    name: "Bob",
    age: 20,
    location: "Dhanmondi",
    gender: "Male"

};

console.log(bob2);