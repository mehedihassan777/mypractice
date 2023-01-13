var Circle = /** @class */ (function () {
  function Circle() {
    this.pi = 3;
  }
  Circle.pi = 3.14;
  return Circle;
})();
console.log(Circle.pi); // returns 3.14
console.log();
var circleObj = new Circle();
console.log(circleObj.pi); // returns 3
var ClassWithStaticMethod = /** @class */ (function () {
  function ClassWithStaticMethod() {}
  ClassWithStaticMethod.staticMethod = function () {
    return "static method has been called.";
  };
  ClassWithStaticMethod.staticProperty = "someValue";
  (function () {
    console.log("Class static initialization block called");
  })();
  return ClassWithStaticMethod;
})();
console.log(ClassWithStaticMethod.staticProperty);
// expected output: "someValue"
console.log(ClassWithStaticMethod.staticMethod());
// expected output: "static method has been called."
