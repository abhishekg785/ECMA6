// let is also used for  assigning variables just like var but somehow diff

let x  = 10;
//let x = 20; // throw err , declared again
console.log(x);

function varTest() {
	var x = 1;
	if(true) {
		var x = 2; // same variable!
		console.log(x); // 2
	}
	console.log(x); // 2
}

varTest(); 

function letTest() {
	let x = 1;
	if(true) {
		let x = 2; // different variable
		console.log(x); // 2
	}
	console.log(x); // 1
}

letTest();

