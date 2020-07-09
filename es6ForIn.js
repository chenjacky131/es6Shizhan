// has拦截in
// let obj = {name:'tom', _name: 'nady'}
// let proxy = new Proxy(obj, {
//   has(target, key){
//     if(key[0] !== '_'){
//       return key in target
//     } else {
//       return false
//     }
//   }
// })
// let bool = 'name' in proxy
// let bool2 = '_name' in proxy
// console.log(bool, bool2)

// enumerate拦截for in 已被移除。现用ownKeys代替
let obj = {
  name: 'tom',
  _name: 'jade',
  age:12
}
let proxy = new Proxy(obj, {
  ownKeys(target){
    let keys = Reflect.ownKeys(target).filter(key => key[0] !='_');
    return keys;
  }
})
for(let k in proxy){
  console.log(k)
}