'user strict'
// 注释的部分为es5形式
class User {
  constructor(name, age){
    this.name = name
    this.age = age
  }
  // 静态方法
  // User.getClassName = function () {
  //   return 'User';
  // }
  static getClassName () {
    return 'User'
  }
  // User.prototype.changeName = function (name) {
  //   this.name = name;
  // }
  changeName (name) {
    this.name = name
  }
  // User.prototype.changeAge = function (age) {
  //   this.age = age;
  // }
  changeAge (age) {
    this.age = age
  }
  // Object.defineProperty(User.prototype, 'info', {
  //   get () {
  //     return 'name: ' + this.name + ' | age: ' + this.age;
  //   }
  // })
  get info () {
    return `name: ${this.name} | age: ${this.age}`
  }
}
// function Manager (name, age, password) {
//   User.call(this, name, age);
//   this.password = password;
// }
class Manager extends User {
  constructor (name, age, password) {
    super(name, age)
    this.password = password
  }
  // Manager.prototype.changePassword = function (pwd) {
  //   this.password = pwd;
  // }
  changePassword (pwd) {
    this.password = pwd
  }
}