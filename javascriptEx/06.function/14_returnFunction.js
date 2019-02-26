/**
 * 
 */

function outer(){
	return function(){
		console.log('hello');
	};
}

outer()();

var fn = outer();
fn();