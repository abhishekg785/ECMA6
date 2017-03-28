// // class RangeInterator() {
// // 	constructor(start, stop) {
// // 		this.value = start;
// // 		this.stop = stop;
// // 	}

// // 	[Symbol.iterator]() {
// // 		return this;
// // 	}

// // 	next() {
// // 		var value = this.value;
// // 		if(value < this.stop) {
// // 			this.value ++;
// // 			return { done : false, value : value}
// // 		}
// // 		else {
// // 			return { done : true, value : undefined };
// // 		}
// // 	}
// // }

// // // returns the new iterator 
// // function range(start, stop) {
// // 	return new RangeInterator(start, stop);
// // }

// // using generator to implement iterator
// function *range(start, stop) {
// 	for(var i = start; i < stop; i++) {
// 		yield i
// 	}
// }

// var obj = range(5, 10);
// console.log(obj.next());
// console.log(obj.next());

function splitIntoRows(icons, rowLength) {
	var rows = [];
	for(var i = 0 ; i < icons.length; i += rowLength) {
		rows.push(icons.slice(i, i + rowLength));
	}

	return rows;
}

console.log(splitIntoRows([1,2,3,4,5,6], 2));

// using generators
function *splitIntoRows(icons, rowLength) {
	for( var i = 0 ; i < icons.length; i+= rowLength) {
		yield icons.slice(i, i + rowLength);
	}
}

// filter functions
function *filter(test, iterable) {
	for(var item of iterable) {
		if(test(item)) {
			yield item;
		}
	}
}