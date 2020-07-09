'user strict'
let str = '你好啊'
console.log(str.indexOf('好'))
// 以下方法的第二个参数都是查询的起始位置
console.log(str.includes('啊', 4))
console.log(str.startsWith('你'))
console.log(str.endsWith('啊'))

console.log(str.repeat(3))