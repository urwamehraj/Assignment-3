const Box = document.getElementById("box");
const button =document.getElementsByTagName("button");
const color = document.getElementsByClassName("color");
const R = document.getElementById("red");
const B = document.getElementById("blue");
const G = document.getElementById("green");
const Y = document.getElementById("yellow");
const btn1 = document.getElementById("greet");
const H1 =document.getElementById("hello");
R.addEventListener('click',()=>{
  R.style.backgroundColor="red";
  Y.style.backgroundColor="white";
  B.style.backgroundColor="white";
  G.style.backgroundColor="white";
})
Y.addEventListener('click',()=>{
  R.style.backgroundColor="white";
  Y.style.backgroundColor="Yellow";
  B.style.backgroundColor="white";
  G.style.backgroundColor="white";
})
B.addEventListener('click',()=>{
  R.style.backgroundColor="White";
  Y.style.backgroundColor="white";
  B.style.backgroundColor="Blue";
  G.style.backgroundColor="white";
})
G.addEventListener('click',()=>{
  R.style.backgroundColor="white";
  Y.style.backgroundColor="white";
  B.style.backgroundColor="white";
  G.style.backgroundColor="Green";
});

  function Greet(){
  const User = document.getElementById("UserName");
  const name = User.value;
  document.getElementById("hello").innerText +=  name;
  }  

    function Empty(){
      const input = document.getElementById("UserName");
      input.value="";
    }