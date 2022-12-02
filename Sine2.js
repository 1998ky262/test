setInterval(changehtml,100);
let sine="死ね";
function changehtml(){
  document.querySelector('html').innerHTML = `<head><link rel="stylesheet" href="https://1998ky262.github.io/test/sine2.css"></head><body>${sine}</body>`;
  sine=sine+"死ね";
}
