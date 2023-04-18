import Pelicula from "./classPelicula.js";

let formPelicula = document.getElementById("formPelicula")
formPelicula.addEventListener("submit",prepararFormulario)


function prepararFormulario(e) {
    e.preventDefault();
    crearPelicula()
}


function crearPelicula() {
    let nuevaPelicula = new Pelicula("supermario","algunades","-","url de imagen","aventura",20023,93,"EEUU","variosactores")
    console.log(nuevaPelicula)
}