/**
 * 
 */

function forEach(ar, fn){
	if(!fn) return;
	
	for (var i = 0; i < ar.length; i++) {
		fn(ar[i], i, ar);
	}
}


var data = [1,2,3,4,5,6];
var newData = [];

forEach(data, function(a, b){
	console.log(`ar[${b}] : ${a}`);
});

console.log('---------------------');

//forEach(data, a=>console.log(a));
forEach(data, (e, i, ar)=>ar[i]=e*e);
forEach(data, console.log);

console.log('---------------------');

forEach(data, (e,i)=>newData[i]=e*e);
forEach(data, console.log);