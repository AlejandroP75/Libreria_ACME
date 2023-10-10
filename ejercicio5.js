let portLib = document.getElementById("linkLib");
let titLib = document.getElementById("titLib");
let autLib = document.getElementById("autLib");
let anioLib = document.getElementById("anioLib");
let botAniadir = document.getElementById("aniaLib");
let form = document.getElementById("biblio");
let libros = [];

libros.push({
    img: "libreria/la oscurdiad de los colores.jpg",
    titulo: "La oscuridad de los colores",
    autor: "Martin Blasco",
    año: "2015",
    estado: "Prestado",
    prestadoA: "Juan Camilo"},
    {
    img: "https://www.rae.es/sites/default/files/portada_cien_anos_de_soledad_0.jpg",
    titulo: "Cien años de soledad",
    autor: "Gabriel Garcia Marquez",
    año: "",
    estado: "",
    prestadoA: ""}, 
    {
    img: "https://images.cdn1.buscalibre.com/fit-in/520x520/c1/8c/c18cdeb80fa6f9a212a1cc5639e94c6d.jpg",
    titulo: "Un mundo Feliz",
    autor: "",
    año: "",
    estado: "",
    prestadoA: ""},
    {
    img: "https://image.cdn1.buscalibre.com/60e395d68463b5f3158bf472.__RS360x360__.jpg",
    titulo: "Angosta",
    autor: "",
    año: "",
    estado: "",
    prestadoA: ""}, 
    {
    img: "https://images.cdn3.buscalibre.com/fit-in/360x360/27/b9/27b9bf742d74cb89453f991ad3f219ae.jpg",
    titulo: "Mañana moriras",
    autor: "",
    año: "",
    estado: "",
    prestadoA: ""}, 
    {
    img: "https://www.crisol.com.pe/media/catalog/product/cache/f6d2c62455a42b0d712f6c919e880845/9/7/9788415999812_jt6edcxzi8av2ykv.jpg",
    titulo: "Corazón",
    autor: "",
    año: "",
    estado: "",
    prestadoA: ""}, 
    {
    img: "https://cdn.agapea.com/B-Ediciones-B-/SOMBRA-NOCTURNA-i1n2182217.jpg",
    titulo: "Sombra Nocturna",
    autor: "",
    año: "",
    estado: "",
    prestadoA: ""}, 
    {
    img: "https://www.elquintolibro.es/wp-content/uploads/2020/07/71ziI-BLDSL.jpg",
    titulo: "Dracula",
    autor: "",
    año: "",
    estado: "",
    prestadoA: ""}
    );
function añadirLibro(){
    let portada = portLib.value;
    let titulo = titLib.value;
    let autor = autLib.value;
    let anio = anioLib.value;
    libros.push({
        img: portada,
        titulo: titulo,
        autor: autor,
        año: anio,
        estado: "",
        prestadoA: ""})
    actualizar();
}

function actualizar(){
    let contenedor = document.createElement("div");
    contenedor.setAttribute("class", "libro");
    let portadaE = document.createElement("img");
    portadaE.setAttribute("src", libros[libros.length - 1]["img"]);
    portadaE.setAttribute("width", "200px");
    portadaE.setAttribute("height", "200px");
    let textE = document.createElement("p");
    let disponible = '<button class="btnLibro">Devolver</button>';
    if ( libros[libros.length - 1]["estado"]== "Prestado"){
        disponible = '<button class="btnLibro">Prestar</button>';
    }
    textE.innerHTML = '<h1 class="titLibro">' + libros[libros.length - 1]["titulo"] + '</h1><div class = "botones"><div><button class="btnLibro">Ver mas</button>' + disponible + '</div><button class="btnLibro">Eliminar</button></div>';
    form.appendChild(contenedor);
    contenedor.appendChild(portadaE);
    contenedor.appendChild(textE); 
}

function cargar(){
    for(let i = 0; i < libros.length; i++){
        let contenedor = document.createElement("div");
        contenedor.setAttribute("class", "libro");
        let portadaE = document.createElement("img");
        portadaE.setAttribute("src", libros[i]["img"]);
        portadaE.setAttribute("width", "200px");
        portadaE.setAttribute("height", "200px");
        let textE = document.createElement("p");
        let disponible = '<button class="btnLibro">Devolver</button>';
        if ( libros[i]["estado"]== "Prestado"){
            disponible = '<button class="btnLibro">Prestar</button>';
        }
        textE.innerHTML = '<h1 class="titLibro">' + libros[i]["titulo"] + '</h1><div class = "botones"><div><button class="btnLibro">Ver mas</button>' + disponible + '</div><button class="btnLibro">Eliminar</button></div>';
        form.appendChild(contenedor);
        contenedor.appendChild(portadaE);
        contenedor.appendChild(textE); 
    }

}
botAniadir.addEventListener("click", añadirLibro);

window.addEventListener("load", cargar);