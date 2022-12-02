setInterval(changehtml,100);
let sine="死ね";
function changehtml(){
  document.querySelector('html').innerHTML = `<body>${sine}</body>`;
  sine=sine+"死ね";
}
