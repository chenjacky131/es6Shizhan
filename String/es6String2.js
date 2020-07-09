'user strict'
let html = '<div>' +
  '<span>hello</span>' + 
  '</div>'
let name = 'tom'
let qq = '12312312'
let html2 = `<div>
  <ul>
    <li>${name}</li>
    <li>${qq}</li>
  </ul>
</div>`
console.log(html2)