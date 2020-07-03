'use strict';
function asyncFun(name){
  return new Promise(function(resolve){
    setTimeout(function () {
      resolve(`my name is: ${name}`)
    })
  })
}
function * fn() {
  yield asyncFun('tom')
}
let it = fn();
it.next().value.then(res => {
  console.log(res)
});