'use strict'
// 数组的解构赋值

// 例1:一维数据解构
// let arr = [1,2,3]

// let a = arr[0]
// let b = arr[1]
// let c = arr[2]

// let [a,b,c] = arr

// console.log(a, b, c)

// 例2:多维数组解构赋值
// let arr = [22, [5, 8], 11]
// let [a, [b, c], d] = arr
// console.log(a,b,c,d)

// 例3:变量的交换
// let x = 11;
// let y = 12;
// [y, x] = [x, y]
// console.log(x,y)

// 例4:不完全解析

// let arr = [22, [5, 8], 11]
// let [a, [, c], d] = arr
// console.log(a,c,d)

// 例5:不能被数组解析的值
// let [x,y] = {}; // NaN undefined Null, {}
// console.log(x,y)

// 例6: Set的解构赋值
// let [x,y] = new Set([22,11])
// console.log(x,y)

// 例7: 所有实现了Iterator的数据解构都能被数组解析
// class User{
//   constructor(){}
//   next(){
//     return {
//       value: 'tom',
//       done: false
//     }
//   }
//   [Symbol.iterator](){
//     return this
//   }
// }
// let user = new User();
// let [x,y] = user;
// console.log(x,y)

// 例8:扩展运算符... 转换成数组
let [x,...y] = [1,2,3,4,5,6,7]
console.log(y)