var adder = {
	base : 1,
	
	add : function(a) {
		var f = v => v + this.base;
		return f(a);
	},
	
	addThruCall : function(a) {
		var f = v => {
			//console.log(v);
			v + this.base
		};
	
		var b = {
			base: 2
		};
	
		return f.call(b,a);
	}
};


//console.log(adder.add(1));
console.log(adder.addThruCall(1));

/*
var display = (fname, lname) => {
	console.log(fname + ' ' + lname);
}
*/

this.fname = 'abhishek';
this.lname = 'goswami';

var display = () => {
	console.log(this.fname + ' ' + this.lname);
}


var Display = function() {
	console.log('Inside the Display function');
	console.log(this.fname + ' ' + this.lname);
}

var obj = {
	fname : 'abhishek',
	lname : 'goswmai'
}

//Display.call(obj);

display.call(obj);

