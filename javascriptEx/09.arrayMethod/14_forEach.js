/**
 * 
 */

var score = [82, 96, 54, 76, 100, 92, 99, 69, 88];
var sum = 0;

score.forEach((value, i, arr)=>{
	sum+=value;
	console.log(value, i, arr);
});

console.log('sum = ' + sum);