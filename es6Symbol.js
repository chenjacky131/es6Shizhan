//'use strict';
let name = Symbol('name')
let obj = {
  age: 22,
  [name]: 'leo'
}
// console.log(Object.keys(obj))

// for(let k in obj){
//   console.log(k)
// }

// console.log(Object.getOwnPropertyNames(obj))

// let key = Object.getOwnPropertySymbols(obj)[0];
// console.log(obj[key])

let name1 = Symbol.for('name');
let name2 = Symbol.for('name');
console.log(name1 === name2)
console.log(Symbol.keyFor(name1))