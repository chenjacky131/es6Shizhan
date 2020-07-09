'user strict'
// 箭头函数的arguments不是指向当前函数的参数
let fun = () => {
  console.log(arguments)
}
fun()