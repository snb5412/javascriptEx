/**
 * 
 */

function sumAll(){
	var sum = 0;
	for (var i = 0; i < arguments.length; i++) {
		sum += arguments[i];
	}
	return sum;
}

console.log(sumAll(1,2,3,4,5,6,7,8,9));