//Code for the mobile nav
function openNav() {
  var x = document.getElementById("mobile-nav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

//Code for hiding scrolling gif
function hidegif(){
 if (document.getElementById('detwinKO').scrollTop > 50 || document.getElementById('detwinAT').scrollTop > 50 || document.getElementById('detwinCA').scrollTop > 50 || document.getElementById('detwinLO').scrollTop > 50 || document.getElementById('detwinVP').scrollTop > 50) {
  document.getElementById("sKO").style.opacity="0";
  document.getElementById("sKO").style.transition="1s";
  document.getElementById("sAT").style.opacity="0";
  document.getElementById("sAT").style.transition="1s";
  document.getElementById("sCA").style.opacity="0";
  document.getElementById("sCA").style.transition="1s";
  document.getElementById("sLO").style.opacity="0";
  document.getElementById("sLO").style.transition="1s";
  document.getElementById("sVP").style.opacity="0";
  document.getElementById("sVP").style.transition="1s";
 } else {
  document.getElementById("sKO").style.opacity="1";
  document.getElementById("sKO").style.transition="1s";
  document.getElementById("sAT").style.opacity="1";
  document.getElementById("sAT").style.transition="1s";
  document.getElementById("sCA").style.opacity="1";
  document.getElementById("sCA").style.transition="1s";
  document.getElementById("sLO").style.opacity="1";
  document.getElementById("sLO").style.transition="1s";
  document.getElementById("sVP").style.opacity="1";
  document.getElementById("sVP").style.transition="1s";
 }
}

//Code for the detail windows DESIGNER
function showKomo(){
  document.getElementById('allcontent').style.opacity="0.3";
  document.getElementById('detwinKO').style.display="block";
}
function showAtbr(){
  document.getElementById('allcontent').style.opacity="0.3";
  document.getElementById('detwinAT').style.display="block";
}
function showCamc(){
  document.getElementById('allcontent').style.opacity="0.3";
  document.getElementById('detwinCA').style.display="block";
}
function showLotf(){
  document.getElementById('allcontent').style.opacity="0.3";
  document.getElementById('detwinLO').style.display="block";
}
function showVpos(){
  document.getElementById('allcontent').style.opacity="0.3";
  document.getElementById('detwinVP').style.display="block";
}
//Code for closing for both DESIGNER and EDUCATOR
function closeme(){
  document.getElementById('allcontent').style.opacity="1";
  document.getElementById('detwinKO').style.display="none";
  document.getElementById('detwinAT').style.display="none";
  document.getElementById('detwinCA').style.display="none";
  document.getElementById('detwinLO').style.display="none";
  document.getElementById('detwinVP').style.display="none";
}
function closemeED(){
  document.getElementById('allcontent').style.opacity="1";
  document.getElementById('detwinVG').style.display="none";
  document.getElementById('detwinFM').style.display="none";
  document.getElementById('detwinIP').style.display="none";
  document.getElementById('detwinCB').style.display="none";
  document.getElementById('detwinFL').style.display="none";
  document.getElementById('detwinAZ').style.display="none";
  document.getElementById('detwinGM').style.display="none";
  document.getElementById('detwinAE').style.display="none";
  document.getElementById('detwinNZ').style.display="none";
  document.getElementById('detwinIS').style.display="none";
}


//Code for the detail windows EDUCATOR
function showVgmu(){
  document.getElementById('allcontent').style.opacity="0.3";
  document.getElementById('detwinVG').style.display="block";
}
function showFmou(){
  document.getElementById('allcontent').style.opacity="0.3";
  document.getElementById('detwinFM').style.display="block";
}
function showIpos(){
  document.getElementById('allcontent').style.opacity="0.3";
  document.getElementById('detwinIP').style.display="block";
}
function showCban(){
  document.getElementById('allcontent').style.opacity="0.3";
  document.getElementById('detwinCB').style.display="block";
}
function showFlea(){
  document.getElementById('allcontent').style.opacity="0.3";
  document.getElementById('detwinFL').style.display="block";
}
function showAzul(){
  document.getElementById('allcontent').style.opacity="0.3";
  document.getElementById('detwinAZ').style.display="block";
}
function showGmpo(){
  document.getElementById('allcontent').style.opacity="0.3";
  document.getElementById('detwinGM').style.display="block";
}
function showAeet(){
  document.getElementById('allcontent').style.opacity="0.3";
  document.getElementById('detwinAE').style.display="block";
}
function showNzin(){
  document.getElementById('allcontent').style.opacity="0.3";
  document.getElementById('detwinNZ').style.display="block";
}
function showIsto(){
  document.getElementById('allcontent').style.opacity="0.3";
  document.getElementById('detwinIS').style.display="block";
}

