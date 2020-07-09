// 对象的解构赋值
'user strict';
// 例1: 默认形式
// let {name:name2} = {name: 'tom', age:12}
// console.log(name2)

// 例2:简写形式
// let {name} = {name:'tom', age: 12}
// console.log(name)

// 例3:嵌套解构
// let obj = {
//   a:{
//     b:{
//       c: 123
//     }
//   }
// }
// // a,b是模式，c才是变量
// let {a:{b:{c}}} = obj;
// console.log(c);

// 例3:默认值
// 数组默认值
// let [x=12,y] = [undefined, 44];
// console.log(x,y);
//对象默认值
// let obj = {
//   name: 'tom',
//   age:12
// }
// let {name,id:uid='007', age} = obj;
// console.log(name,uid,age)

// 例4:错误异常
// let {x:y} = {name:{y:12}};// can't read y of undefined

// 例5: 字符串解构
// let [a,b,c] = 'hello';
// console.log(a,b,c)