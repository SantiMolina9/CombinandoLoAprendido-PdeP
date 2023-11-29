const Tarea = require('../Tarea');
const prompt = require("prompt-sync")();

function crearTarea() {
    const nuevaTarea = new Tarea();
    let estado = "pendiente";
    let titulo = prompt('Ingrese el título de la tarea: ');
        nuevaTarea.setTitulo(titulo);
    let descripcion = prompt('Ingrese la descripción de la tarea: ');
        nuevaTarea.setDescripcion(descripcion);
    let dificultad = prompt('Ingrese la dificultad de la tarea: ');
        nuevaTarea.setDificultad(dificultad)
    let fechaCreacion = new Date();
        nuevaTarea.setFechaCreacion(fechaCreacion);
    let fechaVencimiento = prompt('Ingrese la fecha de vencimiento (YYYY-MM-DD): ');
        while (fechaVencimiento !== "" && !/^\d{4}-\d{2}-\d{2}$/.test(fechaVencimiento)) {
        console.log("El formato de la fecha de vencimiento es incorrecto. Debe ser YYYY-MM-DD.");
        fechaVencimiento = prompt("Ingrese la fecha de vencimiento (opcional, formato: YYYY-MM-DD): ");
        }
        nuevaTarea.setFechaVencimiento(fechaVencimiento);
        nuevaTarea.setEstado(estado);
    return nuevaTarea;
}

module.exports = crearTarea;