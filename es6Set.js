'use strict';
// Set数据结构相关知识
let arr = [1,2,3,'5','5'];
let st = new Set();
let user = {name:'leo',qq:'1213231'}
st.add(user) // 添加元素
console.log(st.has(user)) // 检测是否存在某个
// st.clear() 清楚set
console.log(st.size) // 查看大小

console.log(st)