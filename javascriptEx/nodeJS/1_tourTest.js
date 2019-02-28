/**
 * 
 */
var list = require('./tour.js');

console.log(list.length);

var set = {};

list.forEach(e=>set[e.region]=1)

var regions = Object.keys(set);
console.log(regions);

//var set1 = {};
//for (var i in list) {
//	set1[list[i].region] = 1;
//}
//var regions1 = Object.keys(set1);
//console.log(regions1);

//function shuffle(arr){
//	var j, x, i;
//	for (i = arr.length; i > 0; i--) {
//		j = parseInt(Math.random() * i);
//		x = arr[i-1];
//		arr[i-1] = arr[j];
//		arr[j] = x;
//	}
//}
//
//shuffle(list);
//console.log(list);


var regions2 = regions.slice();
regions2.shuffle();
console.log(regions);
console.log(regions2);
