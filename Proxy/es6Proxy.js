// Reflect是es6为操作对象新提供的API
// let obj = {name:'tom'}
// let proxy = new Proxy(obj,{
//   get(target, key){
//     // Reflect.get(target,key)// 默认值
//     return 'no'
//   },
//   set(target, key, val){
//     Reflect.set(target,key,val) // 默认值
//   },
//   deleteProperty(target,key){
//     Reflect.deleteProperty(target,key) // 默认值
//   }
// })
// delete proxy.name
// console.log(obj.name)
