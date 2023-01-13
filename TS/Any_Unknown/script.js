var vAny = "10"; // We can assign anything to any
var vUnknown = 10; // We can assign anything to unknown just like any 
var s1 = vAny; // Any is assignable to anything 
//var s2: string = vUnknown; // Invalid; we can't assign vUnknown to any other type (without an explicit assertion)
var l = vAny.length; // Ok; anything goes with any
//vUnknown.method(); // Not ok; we don't know anything about this variable
console.log(s1 + 2);
