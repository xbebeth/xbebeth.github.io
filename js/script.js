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
function hidegifED(){
  if (document.getElementById('detwinVG').scrollTop > 50 || document.getElementById('detwinFM').scrollTop > 50 || document.getElementById('detwinIP').scrollTop > 50 || document.getElementById('detwinCB').scrollTop > 50 || document.getElementById('detwinFL').scrollTop > 50 || document.getElementById('detwinAZ').scrollTop > 50 || document.getElementById('detwinGM').scrollTop > 50 || document.getElementById('detwinAE').scrollTop > 50 || document.getElementById('detwinNZ').scrollTop > 50 || document.getElementById('detwinIS').scrollTop > 50) {
   document.getElementById("sVG").style.opacity="0";
   document.getElementById("sVG").style.transition="1s";
   document.getElementById("sFM").style.opacity="0";
   document.getElementById("sFM").style.transition="1s";
   document.getElementById("sIP").style.opacity="0";
   document.getElementById("sIP").style.transition="1s";
   document.getElementById("sCB").style.opacity="0";
   document.getElementById("sCB").style.transition="1s";
   document.getElementById("sFL").style.opacity="0";
   document.getElementById("sFL").style.transition="1s";
   document.getElementById("sAZ").style.opacity="0";
   document.getElementById("sAZ").style.transition="1s";
   document.getElementById("sGM").style.opacity="0";
   document.getElementById("sGM").style.transition="1s";
   document.getElementById("sAE").style.opacity="0";
   document.getElementById("sAE").style.transition="1s";
   document.getElementById("sNZ").style.opacity="0";
   document.getElementById("sNZ").style.transition="1s";
   document.getElementById("sIS").style.opacity="0";
   document.getElementById("sIS").style.transition="1s";
  } else {
   document.getElementById("sVG").style.opacity="1";
   document.getElementById("sVG").style.transition="1s";
   document.getElementById("sFM").style.opacity="1";
   document.getElementById("sFM").style.transition="1s";
   document.getElementById("sIP").style.opacity="1";
   document.getElementById("sIP").style.transition="1s";
   document.getElementById("sCB").style.opacity="1";
   document.getElementById("sCB").style.transition="1s";
   document.getElementById("sFL").style.opacity="1";
   document.getElementById("sFL").style.transition="1s";
   document.getElementById("sAZ").style.opacity="1";
   document.getElementById("sAZ").style.transition="1s";
   document.getElementById("sGM").style.opacity="1";
   document.getElementById("sGM").style.transition="1s";
   document.getElementById("sAE").style.opacity="1";
   document.getElementById("sAE").style.transition="1s"
   document.getElementById("sNZ").style.opacity="1";
   document.getElementById("sNZ").style.transition="1s"
   document.getElementById("sIS").style.opacity="1";
   document.getElementById("sIS").style.transition="1s"
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

