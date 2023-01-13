interface Point {
    x: number;
    y: number;
    z: number;
}

let pointPart: Partial<Point> = {}; // `Partial` allows x and y to be optional
//pointPart.x = 10;
pointPart.y = 10;
//pointPart.z = 10;

console.log(pointPart);