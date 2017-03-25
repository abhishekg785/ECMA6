// arrow function does not create its own this context
// this prevents the problem we suffered earlier

function Person() {
	this.age = 0;
	
	setInterval(()=> {
		this.age++;  // does not create its own this context
	}, 1000);
}

var abhi = new Person();

setInterval(()=>{
	console.log(abhi.age);
},1000);
