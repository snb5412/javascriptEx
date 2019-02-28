/**
 * 
 */
var country = ['korea', 'USA', 'Japan', 'China'];

var toLowerCompare = function(left, right){
	var left2 = left.toLowerCase();
	var right2 = right.toLowerCase();
	if(left2 < right2) return -1;
	if(left2 > right2) return 1;
	return 0;
}; 

country.sort(toLowerCompare);

console.log('after = ' + country);