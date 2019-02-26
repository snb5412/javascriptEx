/**
 * 
 */

var add = function(a, b) {
	return a + b;
}

var mul = function(a, b) {
	return a * b;
}

function add1(a, b) {
	return a + b;
}

function mul1(a, b) {
	return a * b;
}

function calc(a, b, f) {
	return f(a, b);
}

console.log('2+3 = ' + calc(2, 3, add1));
console.log('2*3 = ' + calc(2, 3, mul1));

//익명 구현함수
var result = calc(3, 2, function(a, b) {
	return a / b;
});

//람다식 --> 화살표 함수
var result1 = calc(3, 2, (a,b)=>a/b);
console.log('3 / 2 = ' + result);
console.log('3 / 2 = ' + result1);