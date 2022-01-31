//Code for the mobile nav
function openNav() {
  var x = document.getElementById("mobile-nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//Code for the detail windows
function showKomo(){
  document.getElementById('allcontent').style.opacity="0.3";
  document.getElementById('detwin').style.display="block";
}
function showAtbr(){
  document.getElementById('allcontent').style.opacity="0.3";
  document.getElementById('detwin').style.display="block";
}
function showCamc(){
  document.getElementById('allcontent').style.opacity="0.3";
  document.getElementById('detwin').style.display="block";
}
function showLotf(){
  document.getElementById('allcontent').style.opacity="0.3";
  document.getElementById('detwin').style.display="block";
}
function showVpos(){
  document.getElementById('allcontent').style.opacity="0.3";
  document.getElementById('detwin').style.display="block";
}
function closeme(){
  document.getElementById('detwin').style.display="none";
  document.getElementById('allcontent').style.opacity="1";
}