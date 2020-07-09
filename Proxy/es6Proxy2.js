// 函数执行的代理拦截 apply
// let test = () => {
//   console.log('hello world')
// }
// let proxy = new Proxy(test, {
//   apply(target, cxt, args){
//     console.log('来自拦截函数')
//     return Reflect.apply(target,cxt,args);
//   }
// })
// proxy()
// proxy.apply(null)
// proxy.call(null)

// 类执行的代理拦截 constructor
// class User {
//   constructor(){
//     console.log('this is class')
//   }
// }
// let classProxy = new Proxy(User, {
//   construct(target,args){
//     console.log('class proxy handler');
//     return Reflect.construct(target,args)
//   }
// })
// new classProxy();