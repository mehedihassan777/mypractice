function getPerson(_a) {
    var _b = _a.name, name = _b === void 0 ? 'Tom' : _b, age = _a.age;
    return { name: name, age: age };
}
console.log(getPerson({ age: 30 }));
function getPerson1(obj) {
    var _a = obj.name, name = _a === void 0 ? 'James' : _a, age = obj.age;
    return { name: name, age: age };
}
// 👇️ {name: 'James', age: 30}
console.log(getPerson1({ age: 30 }));
