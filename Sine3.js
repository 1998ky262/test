setInterval(changehtml,10);
let sine;
let code="
let count=0;
function changehtml(){
    sine=sine+code.indexOf(count);
  document.querySelector('html').innerHTML = `<body style="background-color:black;"><div style="color:#00e63a;">${sine}</div></body>`;
  count++;
}
