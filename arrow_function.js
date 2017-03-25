/*
(fname, lname) => {
	console.log(fname + ' ' + lname);
}
*/

// no binding for this here
function Person() {
	//var that = this;
	this.age = 0;
	
	// each function has its own this implementation
	setInterval(function growUp() {
		this.age ++;
	}, 1000);
}


// having a binding here
var p = new Person();

setInterval(function() {
	console.log(p.age);
},1000);

//console.log(p.age);
