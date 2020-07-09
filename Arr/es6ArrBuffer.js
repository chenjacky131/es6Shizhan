// 类型化数组
'use strict';
function createData(){
  let buffer = new ArrayBuffer(4);
  let arr = new Uint8Array(buffer);  
  arr[0] = 12
  arr[1] = 15
  let arr2 = new Uint16Array(buffer);
  arr2[1] = 9 // 2 byte
  return buffer
}
// let buf = createData();
// let arr1 = new Int8Array(buf);
// let arr2 = new Uint16Array(buf);
// console.log(arr1[0], arr1[1], arr2[1])

let buf = createData();
let dataview = new DataView(buf);
console.log(dataview.getInt8(0), dataview.getInt8(1), dataview.getUint16(2, true))