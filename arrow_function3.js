var f = () => {
	'use strict';
	console.log(this);
	return this;
}	

console.log(f() == global);


function demo() {
	'use strict';
	console.log(this);
}

demo();
