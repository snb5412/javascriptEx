/**
 * 
 */

function Human(name, age) {
	this.name = name;
	this.age = age;
	
}

Human.prototype.intro = function(){
	console.log('프로토타입');
	console.log('name = ' + this.name);
	console.log('age = ' + this.age);
}

var kim = new Human('김상형', 29);
kim.intro = function(){
	console.log('인스턴스');
	console.log('name = ' + this.name);
	console.log('age = ' + this.age);
} 
var lee = new Human('이승우', 40);
kim.intro();
lee.intro();