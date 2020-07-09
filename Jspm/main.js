// jspm是在浏览器运行es6的一个东西
import ModuleA from './modules/a'
import ModuleB from './modules/b'

ModuleA()
ModuleB()
let books = new Set([
  {name: 'javascript'},
  {name: 'php'},
  {name: 'python'}
])
let lis = ''
for(let k of books){
  lis+=`<li>${k.name}</li>`
}
let htmlString = `
  <ul>
  ${lis}
  </ul>
`
document.body.innerHTML = htmlString