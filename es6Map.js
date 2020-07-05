'use strict';
// 之前的对象属性只能是字符串的形式，map数据结构可以用其它形式的属性值
/*
map.get获取属性值
map.has检测是否有属性值
map.size检测长度
map.delete删除属性
*/ 

let obj = {
  name: 'leo',
  qq: 12132,
  'full name': 'leo tom'
}
let map = new Map();
map.set(obj, 'very good');
map.set(12, 'number = 12');
map.set(NaN, 'what ?')
console.log(map.get(NaN))