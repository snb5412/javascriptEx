/**
 * 
 */
var human = {
	name: '김상형',
	age: 29
};

human[0] = 87;
human[1] = 79;
human[2] = 92;
human.length = 3;

for (var i = 0; i < human.length; i++) {
	console.log('human[' + i + '] = ' + human[i]);
}

console.log('----------------------------------');

for (var i in human) {
	console.log('human[' + i + '] = ' + human[i]);
}