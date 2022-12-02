setInterval(changehtml,100);
let sine="死ね";
function changehtml(){
  document.querySelector('html').innerHTML = `<body style="background-color:black;"><div style="color:#00e63a;">${sine}</div></body>`;
  sine=sine+"死ね";
}
