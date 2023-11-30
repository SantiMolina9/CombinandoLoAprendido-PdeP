const prompt = require("prompt-sync")();
const Tarea = require("../Tarea");

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
    //Intento de funcion pura. Aclarar en clase 
}
//Funcion impura
function eliminarTarea(){
    const { arrayTareas} = require("./principal");
    console.log("Tareas: \n")
    arrayTareas.forEach(function (tarea, index) {
        console.log(`${index + 1}: ${tarea.getTitulo()}`);
        console.log("--------------");
    })
    console.log("Que tarea desea eliminar?")
    let eliminar = prompt();
    arrayTareas.splice(eliminar - 1, 1);
}
//Funcion impura
function modificarTarea(){
    const { arrayTareas } = require("./principal");
    console.log("Tareas: \n")
    arrayTareas.forEach(function (tarea, index) {
        console.log(`${index + 1}: ${tarea.getTitulo()}`);
        console.log("--------------");
    })
    console.log("Que tarea desea modificar?")
    let modificar = prompt();
    let tareaAModificar = new Tarea();
    tareaAModificar = arrayTareas[modificar - 1];
    console.log(`Tarea seleccionada: ${tareaAModificar.getTitulo()}`);
    console.log("¿Qué atributo desea modificar?");
    console.log("1- Título");
    console.log("2- Descripción");
    console.log("3- Estado");
    console.log("4- Dificultad");
    let atributo=prompt();
    switch(atributo){
        case "1":
            console.log("ingrease el nuevo titulo:");
            let titulo=prompt();
            tareaAModificar.setTitulo(titulo);
            arrayTareas[modificar - 1] = tareaAModificar;
            break;
        case 2:
            console.log("ingrease la nueva descripcion")
            let descripcion=prompt();
            tareaAModificar.setDescripcion(descripcion);
            arrayTareas[modificar - 1] = tareaAModificar;
            break;
        case 3:
            console.log("ingrease el nuevo estado")
            let estado=prompt();
            tareaAModificar.setEstado(estado);
            arrayTareas[modificar - 1] = tareaAModificar;
            break;
        case 4:
            console.log("ingrease la nueva dificultad")
            let dificultad = prompt();
            tareaAModificar.setDificultad(dificultad);
            arrayTareas[modificar - 1] = tareaAModificar;
            break;
    }
}
module.exports = {crearTarea, eliminarTarea, modificarTarea};