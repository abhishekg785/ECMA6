// generator functions can pause themselves :)
// oh shit! its so cool :p

function* quips(name) {
	yield "hello " + name + "!";
	yield "i hope you love es6";
	if(name.startsWith("X")) {
		yield "it's cool how your name starts with X, " + name;
	}
	yield "see you later";
}

var iter = quips('abhishek goswami');
console.log(iter.next());
console.log(iter.next());