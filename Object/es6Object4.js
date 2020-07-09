'use strict';
class User{
  constructor(){

  }
}
let p = {
  getName(){}
}
let user = new User()
console.log(user.__proto__ === User.prototype)

user.__proto__ = p
console.log(user.getName)

Object.setPrototypeOf(user,p)
let proto = Object.getPrototypeOf(user)
console.log(proto)
console.log(proto === user.__proto__)