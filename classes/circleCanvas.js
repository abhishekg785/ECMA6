// we will improve this code using our understanding with es6

function Circle(radius) {
	this.radius = radius;
	Circle.circleMade ++; 
}

Circle.draw = function draw(circle, canvas) { /* Canvas drawing code */

	Object.defineProperty(Circle, "circlesMade", {
		get : function() {
			return !this._count ? 0 : this._count;
		},

		set : function() {
			this._count = val;
		}
	});
}

Circle.prototype = function() {
	area : function() {
		return Math.pow(this.radius, 2) * Math.PI;
	}
}

Object.defineProperty(Circle.prototype, "radius", {

	get : function() {
		return this._radius;
	},

	set : function(radius) {
		if(!Number.isInteger(radius)) {
			throw new Error("Circle radius must be an integer.");
		}
		this._radius = radius;
	}

});