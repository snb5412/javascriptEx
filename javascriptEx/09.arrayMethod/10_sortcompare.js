/**
 * 
 */

var score = [82, 96, 54, 76, 100, 92, 99, 69, 88];
console.log('before = ' + score);

score.sort((left, right)=>{return right-left});
console.log('after = ' + score);