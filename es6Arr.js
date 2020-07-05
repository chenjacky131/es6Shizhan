// Array.from // 将类数组结构转化为数组
// Array.of // 通过多个参数生成数组

// [].copyWithin(target,start,end) // 通过自身数据，在制定位置替换数据
// [].find() / [].findIndex()
// [].fill

// let arr = Array.from({
//   '0':'leo',
//   '1': 'qq1213123',
//   length: 2
// }, function(v, k) {
//   return k + '---' + v
// })
// console.log(arr)

// let set = new Set(['me', 'book', 'leo']);
// console.log(Array.from(set))

// let arr = Array.of(12);
// console.log(arr)

// find
// let arr = [22, 33, 44, 55];
// let newArr = arr.findIndex(function(v, i, obj){
//   return v > 30
// })

// console.log(newArr)

// copyWithin
// let arr = [1,2,3,4,5,6,7]
// arr.copyWithin(2, 5, 6)
// console.log(arr);

// fill
let arr = [1,2,3,4,5,6,7]
arr.fill(10, 2, 4)
console.log(arr);