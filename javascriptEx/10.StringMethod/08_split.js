/**
 * 
 */

var citys = '서울,,대전,광주';
var parts = citys.split(',');

//for(var city in parts){
//	console.log('도시명 : ' + parts[city]);
//}

var query = "?name=홍길동&age=23&address=abc";

var params = {};

query.substring(1)
	.split('&')
	.forEach(e=>{
		param = e.split('=');
		params[param[0]] = param[1];
	})
	
console.log(params);