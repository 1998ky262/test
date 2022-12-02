let sine="死ね";
let py=0;
while(py<10){
sine=sine+sine;
  py++;
  console.log(py);
}
document.querySelector('html').innerHTML = `<body>${sine}</body>`;
