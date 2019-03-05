/**
 * 
 */

var now = new Date();

console.log('현재 시간은 ' +
		now.getFullYear() + '년 ' +
		(now.getMonth() + 1) + '월 '+
		now.getDate() + '일 ' +
		now.getHours() + ':' +
		now.getMinutes() + ' 입니다.');

function twoDigitStr(n){
	return n < 10? '0'+n : n;
}

//function toDateString(this){
//	var year = this.getFullYear();
//	var month = twoDigitStr(this.getMonth() + 1);
//	var date = twoDigitStr(this.getDate());
//
//	return `${year}-${month}-${date}`;
//}
//
//function toTimeString(this){
//	var hh = twoDigitStr(this.getHours());
//	var mm = twoDigitStr(this.getMinutes());
//	var ss = twoDigitStr(this.getSeconds());
//	
//	return `${hh}:${mm}:${ss}`;
//}

Date.prototype.toDateString = function(){
	var year = this.getFullYear();
	var month = twoDigitStr(this.getMonth() + 1);
	var date = twoDigitStr(this.getDate());

	return `${year}-${month}-${date}`;
}

Date.prototype.toTimeString = function(){
	var hh = twoDigitStr(this.getHours());
	var mm = twoDigitStr(this.getMinutes());
	var ss = twoDigitStr(this.getSeconds());
	
	return `${hh}:${mm}:${ss}`;
}
console.log(now.toDateString());
console.log(now.toTimeString());