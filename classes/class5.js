// class cannot extends regular objects
// make the use of setPrototypeOf

var Animal = {
	speak() {
		console.log(this.name + ' makes a noise');
	}
};

class Dog {
	constructor(name) {
		this.name = name;
	}
}


Object.setPrototypeOf(Dog.prototype, Animal);

var d = new Dog('uchia');
d.speak(); // makes a noise
