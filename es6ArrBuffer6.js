'user strict';
let image = document.querySelector('#myimg')
let xhr = new XMLHttpRequest();
xhr.responseType = 'arraybuffer';
xhr.open('GET', './logo.jpg');
xhr.onload = function(){
  let result = xhr.response;
  let blob = new Blob([result]);     
  image.src = window.URL.createObjectURL(blob);
}
xhr.send();