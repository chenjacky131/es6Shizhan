'use strict';
/*
知识点:
  1:export 导出的只是引用指针，并不是值(export default 导出的就是值)
  2:当模块内部更改此变量时，外部的引用也会发生变化
  3:export 命令必须在顶层
  4:导入的引用不可被重写
  5:模块化在node里面还是实验性功能，需要在package.json里面设置type:"module".运行时需要加上参数--experimental-modules
*/ 


let name = 'tom'
setTimeout(() => { // 当模块内部更改此变量时，外部的引用也会发生变化
  name = 'java'
}, 1000)
export default function(){
  console.log('tt')
}
export {name}