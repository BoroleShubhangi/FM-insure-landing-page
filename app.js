var menu= document.getElementById("toggle-menu");
var nav=document.getElementById("nav_menu");

menu.addEventListener("click",function(){
    console.log("click");
this.classList.toggle("active");
nav.classList.toggle('open');
})