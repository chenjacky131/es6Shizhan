'use strict';
let arr = ['a', 'b', 'c'];

// for(let k of arr){
//   console.log(k)
// }

// let iterator = arr[Symbol.iterator]();
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())
// console.log(iterator.next())

class UserGroup {
  constructor(users){
    /*
    users  {'leo':'11123123','zenlinag': '1231'}
    */
    this.users = users
  }
  [Symbol.iterator](){
    let self = this
    let i = 0
    const names = Object.keys(this.users)
    const length = names.length
    // iterator 
    return {
      next: function(){
        let name = names[i++];
        let qq = self.users[name]
        return {value:{name, qq}, done: i > length}
      }
    }
  }
}
let group = new UserGroup({'leo': '12312312', 'zenliang': '13123123'})

// for (let user of group) {
//   console.log(user);
// }

let iterator = group[Symbol.iterator]();
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())