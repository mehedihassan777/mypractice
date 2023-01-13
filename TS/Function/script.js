//Optional Parameter
function add(a, b, c) {
    return a + b + (c || 0);
}
console.log(add(2, 5));
//Default Parameter
function pow(value, exponent) {
    if (exponent === void 0) { exponent = 10; }
    return Math.pow(value, exponent);
}
console.log(pow(10));
//Rest Parameter
function addrest(a, b) {
    var rest = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        rest[_i - 2] = arguments[_i];
    }
    return a + b + rest.reduce(function (p, c) { return p + c; }, 10);
}
console.log(addrest(10, 10, 10, 10, 10));
