//Optional Parameter
function add(a: number, b: number, c?: number) {
    return a + b + (c || 0);
}

console.log(add(2, 5))

//Default Parameter
function pow(value: number, exponent: number = 10) {
    return value ** exponent;
}

console.log(pow(10));

//Rest Parameter
function addrest(a: number, b: number, ...rest: number[]) {
    return a + b + rest.reduce((p, c) => p + c, 10);
}

console.log(addrest(10, 10, 10, 10, 10));