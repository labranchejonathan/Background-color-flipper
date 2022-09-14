const changeBtn = document.getElementById("changebtn");
const body = document.getElementsByTagName("body");
const text = document.getElementById("text");
let bgColor;

// body[0].style.background = "red";

changeBtn.addEventListener("click", changeColor);

function changeColor() {
  x = Math.floor(Math.random() * 256);
  y = Math.floor(Math.random() * 256);
  z = Math.floor(Math.random() * 256);

  bgColor = `rgb(${x},${y},${z})`;
  text.innerHTML = bgColor;

  console.log(bgColor);
  body[0].style.background = bgColor;
}
