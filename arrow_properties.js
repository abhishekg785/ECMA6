// arrow function does not support new keyword
var Foo = () => { };

var foo = new Foo(); // error
console.log(Foo.prototype); // undefined

