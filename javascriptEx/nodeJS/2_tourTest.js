/**
 * 
 */
var list = require('./tour.js');

list.shuffle();

//var tours = {};
//list.forEach(e=>tours[e.region]=[]);
//console.log(tours);
//var regions = Object.keys(tours);
//console.log(regions);
//
//for(var i=0; i < regions.length; i++) {
//	tours[regions[i]] = list.filter(e=>e.region == regions[i]);
//}
//
//console.log(tours);

var tours = {};
list.forEach(e=>{
	if(!tours[e.region]){
		tours[e.region] = [];
	}
	tours[e.region].push(e);
});

var regions = Object.keys(tours);
//console.log(regions);

var tourList = tours['경상권'];

//tourList 를 Html 표로 구성
function toTable(tour){
	return `<tr><td>${tour.region}</td><td>${tour.city}</td><td>${tour.address}</td></tr>`;
}
function toCard(tour){
	return `
	<div class="card">
		<img class="card-img-top" src="../images/Koala.jpg" alt="Card image">
		<div class="card-body">
			<div class="text-danger float-right">
				<i class="far fa-thumbs-up"></i> 80
			</div>
			<h4 class="card-title">
				<a href="nami.html">${tour.region}</a>
			</h4>						
			<p class="card-text">남이섬</p>
			<a href="#" class="card-link">
				<i class="fas fa-home"></i> www.namisum.com
			</a>
		</div>
	</div>`;
}
var trs = tourList.map(toTable).join("\n");
var table = '<table>\n' + trs + '\n</table>';
console.log(table);
