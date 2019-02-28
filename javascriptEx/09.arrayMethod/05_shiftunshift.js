/**
 * 
 */
var stack = [0,1,2,3];
console.log('stack = ' + stack);

stack.unshift(100,200);
console.log('stack = ' + stack);

stack.unshift(300);
console.log('stack = ' + stack);

stack.shift();
console.log('stack = ' + stack);