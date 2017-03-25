/*
'use strict'
var obj = {
	i : 10,
	b : () => console.log(this.i, this),
	c : function() {
		console.log(this.i, this);
	}
}

obj.b();
obj.c();
*/

var obj = {
	a : 10
}


Object.defineProperty(obj, 'b', {

	get : ()=> {
		console.log(this.a, typeof this.a, this);
		return this.a + 10;
	}

});

console.log(obj);
