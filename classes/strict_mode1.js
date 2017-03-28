'use strict'

// Assignment to a non writable property
var obj1 = {};

Object.defineProperty(obj1, 'x', { value : 42, writable : false});
//obj1.x = 9; // throw a typerror

// Assignment to a getter only property
var obj2 = { get x() { return 17; } };
obj2.x = 5; // throws a typerror

// assignment to a new property on a non extensible object
var fixed = {};
Object.preventExtensions(fixed);
fixed.newProp = 'CHAI';
