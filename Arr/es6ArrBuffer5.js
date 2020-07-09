'use strict';

let fileinput = document.querySelector('#fileinput');
fileinput.onchange = function(){
  let file = fileinput.files[0];
  let fileReader = new FileReader();
  fileReader.readAsArrayBuffer(file);
  fileReader.onload = function(){
    console.log(fileReader.result.byteLength)
  }
}