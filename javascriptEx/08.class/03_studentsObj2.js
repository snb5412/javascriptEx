/**
 * 
 */

function Student(name, korean, math, english, science){
	if(!(this instanceof Student)){
		//1. 예외 발생
		//throw "new 로 호출 해야 합니다.";

		console.log(this);
		//2. 변환함수로 작동하게
		return new Student(name, korean, math, english, science);
	}
	this.name = name;
	this.korean = korean;
	this.math = math;
	this.english = english;
	this.science = science;
	
	this.getSum = function(){
		return this.korean + this.math + this.english + this.science;
	},
	
	this.getAverage = function(){
		return this.getSum() / 4;
	},
	
	this.toString = function(){
		return `${this.name}\t${this.getSum()}\t${this.getAverage()}`;
	}
}

var student = Student('김세진',90,83,76,89);
console.log(student);
console.log(student.toString());