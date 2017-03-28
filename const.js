'use strict'
	
function display() {
	
	const MY_FAV = 20;
	let x = 30;

	//MY_FAV = 30;
	//console.log(MY_FAV);
	(function() {
		let x = 40;
		const MY_FAV = 40; // no error
		console.log(MY_FAV);
	})();

	console.log(MY_FAV);
	console.log(x);
}


display(); // call to the function
