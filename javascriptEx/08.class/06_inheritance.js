/**
 * 
 */

function Rectangle(w, h){
	var width = w;
	var height = h;
	
	this.getWidth = function(){ return width; };
	this.getHeight = function(){ return height; };
	this.setWidth = function(w){
		width = w;
	};
	this.setHeight = function(h){
		height = h;
	};
};

Rectangle.prototype.getArea = function(){
	return this.getWidth() * this.getHeight();
};

var rectangle = new Rectangle(5,7);

console.log('AREA: '+ rectangle.getArea());

function Square(length){
	this.base = Rectangle;
	this.base(length, length);
	//Rectangle();
}

Square.prototype = Rectangle.prototype;
Square.prototype.constructor = Square;

var square = new Square(5);
console.log(rectangle.getArea() + ' : ' + square.getArea());
console.log(square instanceof Rectangle);