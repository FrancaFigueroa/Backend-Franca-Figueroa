let libros = ['Heartstopper', 'Aleph', 'Microalmas', 'esquelas'];

let mascotas = ['perro', 'gato', 'pajaro', 'pez'];

class Usuario {
    constructor(nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

}

mascotas.push("cocodrilo");
console.log(mascotas);
let usuario = new Usuario('Franca', 'Figueroa', libros, mascotas);
console.log(usuario);

