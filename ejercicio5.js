let portLib = document.getElementById("linkLib");
let titLib = document.getElementById("titLib");
let autLib = document.getElementById("autLib");
let anioLib = document.getElementById("anioLib");
let botAniadir = document.getElementById("aniaLib");
let form = document.getElementById("biblio");

function añadirLibro(){
    console.log("This is a test");
    let portada = portLib.value;
    let titulo = titLib.value;
    let autor = autLib.value;
    let anio = anioLib.value;

    let contenedor = document.createElement("div");
    contenedor.setAttribute("class", "libro");
    let portadaE = document.createElement("img");
    portadaE.setAttribute("src", portada);
    portadaE.setAttribute("width", "200px");
    portadaE.setAttribute("height", "200px");
    let textE = document.createElement("p");
    textE.innerHTML = "<br>Titulo: " + titulo + "<br>Autor: " + autor + "<br>Año: " + anio;
  
    form.appendChild(contenedor);
    contenedor.appendChild(portadaE);
    contenedor.appendChild(textE);    
}

botAniadir.addEventListener("click", añadirLibro);