'use strict';
/// subarray
// let tarr = new Int16Array([1,2,3,4,5,6]);
// let tarr2 = tarr.subarray(1, 3)
// console.log(tarr.buffer === tarr2.buffer)

let arr = new Int8Array([1,2,3,4,5]);
let arr2 = new Int16Array(5);

arr2.set(arr);
console.log(arr2.byteLength)