/**
 * 
 */

var str = "test S123 s-45 s67M S-8m s-123M s-superTM";
var result = str.search(/[sS]-[0-9]*T?M/);
console.log(result);


var fname = "abc.wav";
var result = fname.search(/\.(mp3|wav|wma|mp4)$/i);
console.log(result);

var num = "890629-1914920";
var result = num.search(/\d{6}-[1234]\d{6}/);

if (result != -1){
	console.log('유효한 주민 등록 번호입니다.');
} else {
	console.log('주민 등록 번호가 올바르지 않습니다.');
}

var str = '내가 그린 기린 그림은 암 기린을 그린 기린	그림이다.';
var result = str.replace(/기린\s/g, '코끼리 ');
console.log(str);
console.log(result);

var count = 1;
var str = '생각이란 생각할수록 생각이 나므로 생각하지 말아야 할 생각은 ' + '생각하지 않으려고 하는 생각이 옳은 생각이라고 생각합니다.';

var result = str.replace(/생각/g, "[$&]");

console.log(str);
console.log('-----------');
console.log(result);

result = str.replace(/생각/g, function(value){
	return value + "(" + count++ + ")";
});
console.log('-----------');
console.log(result);

