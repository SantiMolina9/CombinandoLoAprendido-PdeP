const Tarea = require('../Tarea');
const prompt = require("prompt-sync")();

function crearTarea() {
    const titulo = prompt('Ingrese el título de la tarea: ');
    const descripcion = prompt('Ingrese la descripción de la tarea: ');
    const estado = prompt('Ingrese el estado de la tarea: ');
    const dificultad = prompt('Ingrese la dificultad de la tarea: ');
    const fechaCreacion = new Date();
    const fechaVencimiento = prompt('Ingrese la fecha de vencimiento (YYYY-MM-DD): ');

    const nuevaTarea = new Tarea(titulo, descripcion, estado, dificultad, fechaCreacion, new Date(fechaVencimiento));
    return nuevaTarea;
}

module.exports = crearTarea;