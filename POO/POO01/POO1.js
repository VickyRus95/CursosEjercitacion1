const PeliculaUno = {
    nombre: "Harry",
    id: 01,
    reproducir (){
        return `Reproduciento pelicula... ${this.nombre}`;
    }
}
console.log (PeliculaUno.reproducir())

const PeliculaDos = {
    nombre: "Araña",
    id: 02,
    reproducir (){
        return `Reproduciento pelicula... ${this.nombre}`;
    }
}
console.log (PeliculaDos.reproducir())
/*class Pelicula {
constructor (nombre, id){
    this.nombre = nombre;
    this.id = id;
}
}
const peliculaUno = new Pelicula ("harry", 1);
const peliculaDos = new Pelicula ("araña", 2);
console.log (peliculaDos)

-clase= plantilla

*/