let portLib = document.getElementById("linkLib");
let titLib = document.getElementById("titLib");
let autLib = document.getElementById("autLib");
let anioLib = document.getElementById("anioLib");
let botAniadir = document.getElementById("aniaLib");
let form = document.getElementById("biblio");
let libros = [];
let libro1 = {
    img: "libreria/la oscurdiad de los colores.jpg",
    titulo: "La oscuridad de los colores",
    autor: "Martin Blasco",
    año: "2015",
    estado: "Prestado",
    prestadoA: "Juan Camilo"}

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
    let disponible = '<button class="btnLibro">Devolver</button>';
    if (prestado == "no"){
        disponible = '<button class="btnLibro">Prestar</button>';
    }

    textE.innerHTML = '<h1 class="titLibro">' + titulo + '</h1><button class="btnLibro">Ver mas</button>' + disponible + '<br><button class="btnLibro">Eliminar</button>';
  
    form.appendChild(contenedor);
    contenedor.appendChild(portadaE);
    contenedor.appendChild(textE); 
}

    function cargar(){
        let contenedor = document.createElement("div");
        contenedor.setAttribute("class", "libro");
        let portadaE = document.createElement("img");
        portadaE.setAttribute("src", libro1["img"]);
        portadaE.setAttribute("width", "200px");
        portadaE.setAttribute("height", "200px");
        let textE = document.createElement("p");
        let disponible = '<button class="btnLibro">Devolver</button>';
        if ( libro1["estado"]== "Prestado"){
            disponible = '<button class="btnLibro">Prestar</button>';
        }
        textE.innerHTML = '<h1 class="titLibro">' + libro1["titulo"] + '</h1><button class="btnLibro">Ver mas</button>' + disponible + '<br><button class="btnLibro">Eliminar</button>';
        form.appendChild(contenedor);
        contenedor.appendChild(portadaE);
        contenedor.appendChild(textE); 
    }
botAniadir.addEventListener("click", añadirLibro);

window.addEventListener("load", cargar);