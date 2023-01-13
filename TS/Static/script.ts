class Circle {
    static pi = 3.14;
    pi = 3;
}

console.log(Circle.pi); // returns 3.14
console.log();

let circleObj = new Circle();
console.log(circleObj.pi); // returns 3

class ClassWithStaticMethod {
    static staticProperty = 'someValue';
    static staticMethod() {
        return 'static method has been called.';
    }
    static {
        console.log('Class static initialization block called');
    }
}

console.log(ClassWithStaticMethod.staticProperty);
// expected output: "someValue"
console.log(ClassWithStaticMethod.staticMethod());
// expected output: "static method has been called."