interface GetPersonParams {
    name?: string,
    age: number
}

function getPerson({ name = 'Tom', age }: GetPersonParams) {
    return { name, age };
}

console.log(getPerson({ age: 30 }));

type GetParams = {
    name?: string;
    age: number;
};

function getPerson1(obj: GetParams) {
    const { name = 'James', age } = obj;

    return { name, age };
}

// 👇️ {name: 'James', age: 30}
console.log(getPerson1({ age: 30 }));
