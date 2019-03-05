/**
 * 
 */

var s = '{"x":1, "y":2, "val":"홍길동"}';
var obj = JSON.parse(s);
console.log(obj);

console.log(JSON.stringify({x:1, y:2, val:'홍길동'}));

var arr = JSON.parse('[4, 3, 5]');
console.log(arr);
console.log(arr[0]);