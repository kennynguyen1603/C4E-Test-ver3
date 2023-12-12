const btnA = document.querySelector(".data1");
const btnB = document.querySelector(".data2");
const btn = document.querySelector(".btn");

function SNT(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

var arr = [];
function clearInputs() {
  btnA.value = "";
  btnB.value = "";
}

function timSNT() {
  var KQ = document.querySelector(".ketQua");
  let total = 0;
  const value1 = parseInt(btnA.value);
  const value2 = parseInt(btnB.value);
  if (value1 < value2) {
    for (let i = value1; i <= value2; i++) {
      if (SNT(i)) {
        //   console.log("i =>", i);
        total += i;
        arr.push(i);
      }
    }
  } else {
    alert("Dữ liệu nhập vào không hợp lệ!");
    clearInputs();
  }
  btnA.value = "";
  btnB.value = "";
  KQ.innerHTML = `<div>Các số nguyên tố trong khoảng ${value1} - ${value2}: ${arr}</div> 
  <div>Tổng các số nguyên tố vừa tìm được là: ${total}</div>
  `;
  arr = "";
}

btn.onclick = timSNT;
