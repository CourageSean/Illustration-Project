/*=============== declarations ====================*/

const bdy = document.getElementById("body"); //body declaration
const article1 = document.getElementById("art1"); //articles declaration
const article2 = document.getElementById("art2"); // ""
const article3 = document.getElementById("art3"); // ""
const btn1 = document.getElementById("btn-1"); //  button declaration
const btn2 = document.getElementById("btn-2");
const btn3 = document.getElementById("btn-3"); // button declaration
const container = document.getElementById("container1"); // membership-container declaration
const email = document.getElementById("Email");
const superM = document.getElementById("superMail");
const follow = document.getElementById("follow");
const socialMeF = document.getElementById("socialMf"); // SocialMediaLink declaration
const socialMeI = document.getElementById("socialMi"); // ""
const socialMeT = document.getElementById("socialMt"); // ""
const socialMeY = document.getElementById("socialMy"); //""

//================  Darkmode ===========================//
function darkmode() {
  article1.style.backgroundImage = "url(assets/images/darkmode-img1.png)";
  article2.style.backgroundImage = "url(assets/images/darkmode-img2.png)";
  article3.style.backgroundImage = "url((assets/images/darkmode-img3.png)";
  btn1.style.color = "grey";
  btn3.style.color = "grey";
  bdy.style.backgroundColor = "black";
  bdy.style.color = "white";

  container.style.color = "white";
  container.style.backgroundColor = "#021016";

  email.style.color = "white";
  superM.style.color = "grey";
  follow.style.color = "white";
  socialMeF.style.color = "grey";
  socialMeI.style.color = "grey";
  socialMeT.style.color = "grey";
  socialMeY.style.color = "grey";
  document.getElementById("img1").src = "assets/images/darkmode-img4.png";
  document.getElementById("img2").src = "assets/images/darkmode-img5.png";
  document.getElementById("img3").src = "assets/images/darkmode-img6.png";
}

//====================== Lightmode ===========================//
function lightmode() {
  article1.style.backgroundImage = "url(assets/images/illustration1.gif)";
  article2.style.backgroundImage = "url(assets/images/illustration2.png)";
  article3.style.backgroundImage = "url((assets/images/illustration3.png)";
  btn1.style.color = "white";
  btn2.style.color = "black";
  btn3.style.color = "white";
  bdy.style.backgroundColor = "white";
  bdy.style.color = "black";

  container.style.color = "black";
  container.style.backgroundColor = "#f5fbfe";

  email.style.color = "grey";
  superM.style.color = "black";
  follow.style.color = "grey";
  socialMeF.style.color = "black";
  socialMeI.style.color = "black";
  socialMeT.style.color = "black";
  socialMeY.style.color = "black";
  document.getElementById("img1").src = "assets/images/illustration4.png";
  document.getElementById("img2").src = "assets/images/illustration5.png";
  document.getElementById("img3").src = "assets/images/illustration6.png";
}
