/**
 * 
 */

function test(name){
	var output='hello '+name+'...!';
	
	return function(){
		console.log(output);
	}
}

test('javascript')();

var f1= test('Javascript');
var f2 = test('Hong');

f1();
f2();

function outcount(){
	var count = 0;
	setInterval(function(){
		count++;
		console.log(count + '초 지났습니다.');
	}, 1000);
}

outcount();