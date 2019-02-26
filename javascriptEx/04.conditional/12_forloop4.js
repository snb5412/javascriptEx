/**
 * 
 */

var arScore = [88, 78, 96, 54, 23];

var sum = 0;

for (var i = 0; i < arScore.length; i++) {
	sum += arScore[i];
}

console.log(`총점 : ${sum}, 평균 : ${sum/arScore.length}`);