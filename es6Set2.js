'use strict';
let arr = ['qq', 'tom.com', 'tom.com']
let newArr = Array.from(new Set(arr)) // 将类数组结构，转化为数组，数组去重
// console.log(newArr)

// console.log(Set.prototype[Symbol.iterator] === Set.prototype.values)

let st = new Set(['qq', 'tom.com', 'tom.com'])
// 下面三种遍历方法
// let itkeys = st.keys()
// for(let k of itkeys){
//   console.log(k)
// }

// let itValues = st.values()
// for(let k of itValues){
//   console.log(k)
// }

// let itEntries = st.entries()
// for(let k of itEntries){
//   console.log(k)
// }
for(let k of st){
  console.log(k)
}