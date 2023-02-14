console.log("Is this working?");

let jsLogo = document.getElementById("logo");
let jsButton = document.getElementById("jsBackground");
const pageBackground = document.getElementById("theHTML");
const paraWhite = document.getElementById("para1");

let currentColor = 0;
function changeColorBackground() {
  const colorArray = [
    "white",
    "grey",
    "rgb(214, 181, 142)",
    "#2a5b22",
    "#357487",
    "black",
  ];
  document.body.style.background = colorArray[currentColor];
  document.getElementById("para1").style.color = "black";
  if (currentColor === colorArray.length - 1) {
    currentColor = 0;
    document.getElementById("para1").style.color = "white";
  } else {
    currentColor++;
  }
}
jsButton.addEventListener("click", changeColorBackground);
