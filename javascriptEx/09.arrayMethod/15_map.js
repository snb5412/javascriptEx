/**
 * 
 */
var score = [82, 96, 54, 76, 100, 92, 99, 69, 88];
var score2 = score.map(function(value){
	return value * 2;
});

console.log('score = ' + score);
console.log('score2 = ' + score2);

var names = ['홍길동', '고길동', '둘리'];

var names2 = names.map(function(value){
	return `<li>${value}</li>`;
}).join('\n');


names2 = "<ul>\n" + names2 + "\n</ul>";
console.log(names2);