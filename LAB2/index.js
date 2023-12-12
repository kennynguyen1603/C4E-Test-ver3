let ipData = document.querySelector(".inputdata");
let display = document.querySelector(".display");
let btn = document.querySelector(".btn");
function numberOneTriangle() {
  const value = parseInt(ipData.value);
  if (value < 1 || value > 10) {
    console.log("Please enter a number between 1 and 10.");
    alert("Please enter a number between 1 and 10.");
    ipData.value = "";
    return;
  }
  ``;
  let triangle = "";
  for (let i = 1; i <= value; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
      line += "* ";
    }
    console.log(line);
    triangle += line + "<br />";
  }
  ipData.value = "";
  display.innerHTML = triangle;
}

btn.onclick = numberOneTriangle;
