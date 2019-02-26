/**
 * 
 */

/*
var intervalID = setInterval(function(){
	console.log(new Date());
}, 1000);

setTimeout(function(){
	clearInterval(intervalID);
}, 10000);
*/
function launch(){
	console.log('발사!....');
}
function fire(){
	console.log('Boom!....');
}

function countdown(counter, fn){
	var intervalID = setInterval(function(){
		if(counter == 0){
			fn();
			clearInterval(intervalID);
		} else{
			console.log(counter--);
		}
	}, 1000);	
}

countdown(10,launch);
countdown(4, fire);
