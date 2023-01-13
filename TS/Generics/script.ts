//Generic Function
function createPair<S, T>(v1: S, v2: T): [S, T] {
    return [v1, v2];
}

console.log(createPair<string, number>('hello', 42)); // ['hello', 42]

//Generic Alias

type Wrapped<T> = { value: T };

const wrappedValue: Wrapped<number> = { value: 10 };
console.log(wrappedValue);
