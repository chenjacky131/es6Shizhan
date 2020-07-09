'use strict';
class A {
  constructor(){
    this.name = 'leo'
  }
  getName(){   
  }
}
class B extends A {
  constructor(){
    super()
    this.age = 22
  }
  getAge(){
  }
  [Symbol('fullname')](){  
  }
}
B.prototype.getClass = function(){}
let b = new B
// Object.keys能够得到自身的可枚举属性，但得不到原型链上的属性，得不到Symbols属性
// console.log(Object.keys(b))

// Object.getOwnPropertyNames能够得到自身，包括不可枚举的属性，得不到原型链上的属性，得不到Symbols属性
// console.log(Object.getOwnPropertyNames(b))

// Object.getOwnPropertySymbols可以得到自身的Symbols属性，包括不可枚举的属性
// console.log(Object.getOwnPropertySymbols(B.prototype))

// 可以得到自身和继承自原型链上的属性，但必须是可枚举的属性
// for(let key in b){
//   console.log(key)
// }

console.log(Object.getOwnPropertyDescriptor(B.prototype, 'getClass'))