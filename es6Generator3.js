'use strict';
function * fn(){
  yield 'zeliang'; // yield语句只能存在于generator函数体内
  return 'leo';
}
fn();