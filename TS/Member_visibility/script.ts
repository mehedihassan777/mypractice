class Foo {
    private x: number;
    protected y: number;
    public z: number;
    saveData(): void {
        this.x = 1; // ok
        console.log(this.x);
        this.y = 2; // ok
        console.log(this.y);
        this.z = 3; // ok
        console.log(this.z);
        let foo = new Foo;
        foo.x = 4; // ok
        console.log(foo.x);
        foo.y = 5; // ok
        console.log(foo.y);
        foo.z = 6; // ok
        console.log(foo.z);
    }
}

class Bar extends Foo {
    getData() {
        this.y = 7; // ok
        console.log(this.y);
        this.z = 8; // ok
        console.log(this.z);
        let foo = new Foo;
        let bar = new Bar;
        bar.y = 9; // ok
        console.log(bar.y);
        bar.z = 10; // ok
        console.log(bar.z);
        foo.z = 11; // ok
        console.log(foo.z);

    }
}

let obj1 = new Foo;
obj1.saveData();

let obj2 = new Bar;
obj2.getData();