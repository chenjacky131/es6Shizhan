'user strict'
// 标签模板
// function tag(strArr, arg1, arg2){
//   console.log(strArr)
//   console.log(arg1)
//   console.log(arg2)
// }
// let name = 'leo'
// let age = 30
// let result = tag`${name}${age}`
// console.log(result)

function safe(strArr){
  let result = ''
  for(let i = 0,len = strArr.length; i < len; i++){
    result += strArr[i].replace(/</g, '&lt;').replace(/>/g, '&gt;');
    if(i < arguments.length - 1){
      result += arguments[i + 1]
    }    
  }
  return result
}
let name = 'tom'
let result = safe`<p>hello ${name}<p>`
console.log(result)