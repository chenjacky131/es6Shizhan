'use strict';
// let fun1 = ({x,y}={x:12,y:22}) => {
//   console.log(x,y);
// }
// fun1();

let fun2 = ({x=1,y=2,z=3},[a=11,b=12,c=13],name='tom') => {
  console.log(x,y,z)
  console.log(a,b,c)
  console.log(name)
}
fun2({},[]);