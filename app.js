var menu= document.getElementById("toggle_menu");
var nav=document.getElementById("nav_menu");

menu.addEventListener("click",function(){
this.classList.toggle("active");
nav.classList.toggle('open');
})