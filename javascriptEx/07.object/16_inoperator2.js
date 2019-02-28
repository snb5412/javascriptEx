/**
 * 
 */

var ar = [1,2,3];
delete ar[1];

if(0 in ar){
	console.log('0 Ok');
}
if(1 in ar){
	console.log('1 Ok');
}

console.log(ar);