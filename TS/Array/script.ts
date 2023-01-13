const names: string[] = ["Dylan"];
names.push("Jack");

console.log(names);

const numbers = [1, 2, 3]; // inferred to type number[]
numbers.push(4); // no error
console.log(numbers);

let head: number = numbers[0]; // no error
console.log(head);