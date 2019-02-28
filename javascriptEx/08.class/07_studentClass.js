/**
 * 
 */
class Student{
	constructor(name, age)
	{
		this._name = name;
		this.age = age;
	}
	
	printProfile(){
		console.log(`이름 : ${this.name}, 나이 : ${this.age}`);
	}
	
	get name(){
		return this._name;
	}
	
	set name(name){
		this._name = name;
	}
}

var student = new Student('홍길동', 29);
console.log(student.name);
student.name = '고길동';
console.log(student.name);
console.log(student);