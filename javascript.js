//boton ir al inicio, al final de la pagina
function paraAtras() { 
	document.getElementById("boton").href="index.html";}
//Pagina responsive
document.getElementById("menumovil").addEventListener("click", mostrar_menu);
document.getElementById("fondonegro").addEventListener("click", ocultar_menu);

nav=document.getElementById ("nav");

background_menu = document.getElementById("fondonegro");

function mostrar_menu (){
    nav.style.right = "0px"
    background_menu.style.display = "block"
}

function ocultar_menu (){
    nav.style.right = "-300px"
    background_menu.style.display = "none"
}

//mostrar u ocultar elemento
function mostrarTexto() {
document.getElementById("texto").style.display = "block";}
function mostrarTextos() {
document.getElementById("textos").style.display = "block";}

//scroll to top
window.onscroll=function(){
if(document.documentElement.scrollTop > 100){
document.querySelector(".go-top-container")
.classList.add("show");}
else{
document.querySelector(".go-top-container")
.classList.remove("show")}
}
document.querySelector(".go-top-container").addEventListener("click", ()=>{
    window.scrollTo({
    top: 0,
    behavior:"smooth"
    })
})
//Descargar pdf
var boton = document.getElementById("download");
var contador = 3;
var etiqueta = document.createElement("p");

etiqueta.innerHTML = "<b> 3 segundos para descargar CV.</b>";
var id;

boton.parentNode.replaceChild(etiqueta, boton);

function descarga(){
   this.style.display = "none";
   id = window.setInterval(function(){
      contador--;
      if(contador < 0){
         etiqueta.parentNode.replaceChild(boton, etiqueta);
         window.clearInterval(id);
      }
      else{
         etiqueta.innerHTML = + contador.toString() + "<b> segundos para descargar. </b>";
      }
   }, 1000)
}

var clickbtn = document.getElementById("btn");
clickbtn.onclick = descarga;
