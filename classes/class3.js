// function Display() {
// }

// Display.prototype.show = function() {
// 	console.log(this);
// 	return this;
// }

// let obj = new Display();
// let show = obj.show;  // this will have the instance of the object

// show();  // global instance 


class Animal {
	speak() {
		console.log(this);
		return this;
	}

	static eat() {
		return this;
	}
}

let obj = new Animal();
let speak = obj.speak;

speak();