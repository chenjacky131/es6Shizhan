function asyncFun(a, b) {
  return new Promise(function (resolve, reject) {
    if(typeof a !== 'number' | typeof b !== 'number') {
      reject('not a number')
    }
    setTimeout(function () {
      resolve(a + b)
    }, 200)
  })
}
asyncFun('1', 2).then(function (result) {
  console.log(result)
}, function (err) {// 这里如果有捕获后，后面的catch就不会执行
  console.log('err1:' + err)
}).catch(function (err) {
  console.log('err2:' + err)
})

Promise.all([asyncFun(1,2), asyncFun(3,4)]).then(function(result) {
  console.log(result)
})