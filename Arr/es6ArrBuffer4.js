'use strict';
// let buffer = new ArrayBuffer(8)
// let int16Arr = new Int16Array(buffer)
// int16Arr[0] = 300
// let int8Arr = new Int8Array(buffer)
// console.log(int8Arr)

// let buffer2 = new ArrayBuffer(8);
// let dataview = new DataView(buffer2);
// dataview.setInt16(0, 300)
// let int8Arr2 = new Int8Array(buffer2)
// console.log(int8Arr2)

let buffer = new ArrayBuffer(10)
let dataview = new DataView(buffer)
dataview.setFloat32(2, 18.9, true)
dataview.setInt32(6, 2000, true)
dataview.setInt16(0, 90, true)

let value = dataview.getFloat32(2 , true)
console.log(value)