


function upd(){
  
  document.getElementById('header').innerHTML = "UPDATES";
  nav_act("update");
  document.getElementsByClassName('.updcont').style.display = "block";
  document.getElementById('reqcont').style.display = "none";
  document.getElementById('upccont').style.display = "none";
  
}


function upc(){
  document.getElementById('header').innerHTML = "UPCOMMING";
  nav_act("upcomming");
  document.getElementsByClassName('.updcont').style.display = "none";
  document.getElementById('reqcont').style.display = "none";
  document.getElementById('upccont').style.display = "block";
  
}


function req(){
  document.getElementById('header').innerHTML = "REQUEST";
  nav_act("request");
  document.getElementsByClassName('.updcont').style.display = "none";
  document.getElementById('reqcont').style.display = "block";
  document.getElementById('upccont').style.display = "none";
  
}

function nav_act(id){
  var act = document.getElementsByClassName("active");
  act[0].className = act[0].className.replace("active","");
  document.getElementById(id).className += "nav-item nav-link font-weight-bold active";
}

upd();

