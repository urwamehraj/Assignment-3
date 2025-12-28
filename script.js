const Box = document.getElementById("box");
const button =document.getElementsByTagName("button");
const color = document.getElementsByClassName("color");
const R = document.getElementById("red");
const B = document.getElementById("blue");
const G = document.getElementById("green");
const Y = document.getElementById("yellow");
R.addEventListener('click',()=>{
  R.style.backgroundColor="red";
})
Y.addEventListener('click',()=>{
  Y.style.backgroundColor="Yellow";
  
})
B.addEventListener('click',()=>{
  B.style.backgroundColor="Blue";

})
G.addEventListener('click',()=>{
  G.style.backgroundColor="Green";
});
function Empty(){
const input = document.getElementById("UserName").value;
input ='';
}
const Greet = document.getElementById("greet");
const H1 = document.getElementById("hello");
const userInput = document.getElementById("UserName");

let isPrinted = false; // track first click

Greet.addEventListener("click", () => {
  const name = userInput.value.trim();

  // First click → print
  if (!isPrinted && name !== "") {
    H1.textContent = `Hello, ${name}!`;
    isPrinted = true;
  }
  // Second click → clear
  else if (isPrinted) {
    userInput.value = "";
    isPrinted = false;
  }
  // Empty input
  else {
    alert("Please enter your name");
  }
});



