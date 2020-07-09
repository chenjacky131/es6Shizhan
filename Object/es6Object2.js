'use strict';
// console.log(Object.is({}, {}), {} === {})

// console.log(Object.is(NaN, NaN), NaN === NaN)

// console.log(Object.is(+0, -0), +0 === -0)

// console.log(Object.assign({}, {name: 'tom'}))

// let obj = {}
// let obj2 = Object.assign(obj, {name: 'leo'})
// console.log(obj === obj2)

const DEFAULT_OPTIONS = {
  name: 'leo'
}

function test(options){
  options = Object.assign({}, DEFAULT_OPTIONS, options)
  console.log(options)  
}

test({name: 'zeliang'})