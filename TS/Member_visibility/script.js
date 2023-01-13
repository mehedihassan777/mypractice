var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Foo = /** @class */ (function () {
    function Foo() {
    }
    Foo.prototype.saveData = function () {
        this.x = 1; // ok
        console.log(this.x);
        this.y = 2; // ok
        console.log(this.y);
        this.z = 3; // ok
        console.log(this.z);
        var foo = new Foo;
        foo.x = 4; // ok
        console.log(foo.x);
        foo.y = 5; // ok
        console.log(foo.y);
        foo.z = 6; // ok
        console.log(foo.z);
    };
    return Foo;
}());
var Bar = /** @class */ (function (_super) {
    __extends(Bar, _super);
    function Bar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Bar.prototype.getData = function () {
        this.y = 7; // ok
        console.log(this.y);
        this.z = 8; // ok
        console.log(this.z);
        var foo = new Foo;
        var bar = new Bar;
        bar.y = 9; // ok
        console.log(bar.y);
        bar.z = 10; // ok
        console.log(bar.z);
        foo.z = 11; // ok
        console.log(foo.z);
    };
    return Bar;
}(Foo));
var obj1 = new Foo;
obj1.saveData();
var obj2 = new Bar;
obj2.getData();
