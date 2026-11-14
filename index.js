var rn1=Math.floor(Math.random()*6)+1;
var img1="images/dice"+rn1+".png";
document.querySelectorAll("img")[0].setAttribute("src",img1);
var rn2=Math.floor(Math.random()*6)+1;
var img2="images/dice"+rn2+".png";
document.querySelectorAll("img")[1].setAttribute("src",img2);
if(rn1>rn2){
  document.querySelector("h1").innerHTML="🚩 Player 1 Wins!";
}
else if(rn2>rn1){
  document.querySelector("h1").innerHTML="Player 2 Wins! 🚩";
}
else{
  document.querySelector("h1").innerHTML="It's a Draw!";
}
