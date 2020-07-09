'use strict';
// 函数数组参数默认值和解构赋值的一些例子
// function fun1(x,y){
//   x = x || 12;
//   y = y || 3;
//   console.log(x,y)
// }
// fun1()

// let fun1 = (x=12,y=3) => {
//   console.log(x,y)
// }
// fun1();
// fun1(10);
// fun1(undefined,2);

// let fun1 = ([x=12,y=3]) => {
//   console.log(x,y);
// }
// fun1([]);
// fun1([,2]);

// 如果不给参数，则形参需要给个默认值 
// let fun1 = ([x=12,y=3] = []) => {
//   console.log(x,y);
// }
// fun1();
// let fun1 = ([x=12,y=3] = [], z=90) => {
//   console.log(x,y,z)
// }
// fun1(undefined,88);

