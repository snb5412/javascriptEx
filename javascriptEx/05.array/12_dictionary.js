/**
 * 
 */

var cap = {};

cap['korea'] = 'Seoul';
cap['usa'] = 'Washington';
cap['japan'] = 'Tokyo';
cap['uk'] = 'London';
cap['france'] = 'Paris';

console.log('영국의 수도는 ' + cap['uk'] + ' 입니다');

var keys = Object.keys(cap);
console.log(keys);

var set = {};
set['korea'] = 1;
set['china'] = 1;
set['korea'] = 1;
set['usa'] = 1;
set['china'] = 1;

keys = Object.keys(set)
console.log(keys);