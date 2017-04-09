"use strict"

this.x = 9;
var module = {
	x : 81,
	getX : function() {
		return this.x;
		console.log(this.x);
	}
};

module.getX();

var retrieveX = module.getX;
retrieveX(); // returns 9 as it gets invoked at the global space

var boundGetX = retrieveX.bind(module);
boundGetX();  // returns 81
