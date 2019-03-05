/**
 * 
 */

var tours = require('./tour.js');
const perPage = 8;

//[start, end) 범위의 숫자 배열 리턴
function range(end){
	var arr = [];
	for (var i = 0; i < end; i++) {
		arr.push(i);
	}
	return arr;
}

//[start, end) 범위의 정수 난수 리턴
function random(start, end){
	return Math.floor(Math.random()*end) + start;
}
var totalPage = Math.ceil(tours.length/perPage);
var page = random(1, totalPage);


console.log(totalPage, page);

function toPageItem(e){
	if(e == page){
		return `<li class="page-item active">
		<a class="page-link" href="#">${e}</a></li>`
	} else {
		return `<li class="page-item">
		<a class="page-link" href="#">${e}</a></li>`
	}
}
//tag : 태그
//attrs : 속성 맵
// item : 태그의 데이터
function wrapHtml(tag, item, attrs={}){
	var arr = [];
	//attrs --> 문자열로
	for (var i in attrs) {
		arr.push(`${i}="${attrs[i]}"`);
	}
	var attrstr = arr.join(' ');
	return `<${tag} ${attrstr}>\n${item}\n</${tag}>`;
}

var a ={
		class:"a",
		name:'b'
};


function toPagination(items){
	return `<ul class="pagination">\n${items}\n</ul>`;
}

var items = range(totalPage, 1)
				.map(toPageItem)
				.join('\n');

var pagination = toPagination(items);
//console.log(pagination);

console.log(wrapHtml("ul", items, a));
