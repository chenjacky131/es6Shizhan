'user strict';
let ok = 'ok'
// obj['myid' + ok] = '007'
// obj['age' + ok] = 22

let obj = {
  ['myid' + ok]: '007',
  ['age' + ok]: 22,
  getName(firstName, lastName){
    return {firstName, lastName}
  },
  set name(name){
    this.name = name
  },
  get name(){
    return this.name
  }
}
let obj2 = {}

// exports.obj = obj;
// exports.obj2 = obj2;

module.exports = {obj, obj2}