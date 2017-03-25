// arrow function bodies

var func = x => x * x;

var func = (x, y) => { return x * y; } 

//console.log(func(3));

// returning objects

//var demo1 = () => {foo:'bar'} // error

var demo2 = () => { return {foo : 'bar'} }

console.log(demo2());

// parsing order

let callback;

callback =  callback || function() {} ; // ok
//callback =  callback || () => {} // gives error
callback =  callback || (() => {}) // ok


console.log((() => 'foobar' )());  // returns foobar

setTimeout(() => {
	console.log('I happen sooner');
	setTimeout(() => {
		console.log('i happen later');
	},1);
},1);
