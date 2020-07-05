/*
  Int8Array: 8位有符号整数，长度1个字节
  Uint8Array: 8位无符号整数,长度1个字节

  Int16Array: 16位有符号整数，长度2个字节
  Uint16Array: 16为无符号整数，长度2个字节

  Int32Array: 32位有符号整数，长度4个字节
  Uint32Array: 32位无符号整数，长度4个字节

  Float32Array: 32位浮点数，长度4个字节
  Float64Array: 64位浮点数，长度8个字节
*/
'use strict';
let buffer = new ArrayBuffer(10);
// let tarr = new Int16Array(buffer);

// let tarr = new Int16Array(10);
// console.log(tarr.byteLength)

// let tarr = new Int16Array(buffer, 2)
// console.log(tarr.length)

// let tarr = new Int16Array(buffer, 2, 2)
// console.log(tarr.length)

// let tarr = new Int16Array([12, 3, 5]);
// console.log(tarr.buffer.byteLength)
// console.log(tarr.length, tarr.byteLength)

let tarr = new Int16Array([12, 3, 5]);
let tarr2 = new Int8Array(tarr);
console.log(tarr2.length, tarr2.byteLength)