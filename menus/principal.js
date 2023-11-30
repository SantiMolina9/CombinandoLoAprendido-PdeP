const prompt = require("prompt-sync")();
const { tareasMenu } = require("./menuTareas");
const { crearTarea, eliminarTarea , modificarTarea } = require("./ABM");
let arrayTareas = [];
//Paradigma Estructurado
//Funcion impura
function menuPrincipal() {
  let option;
  do {
    console.log("Bienvenido al Menú principal \n");
    console.log("1- Para ver tareas");
    console.log("2- Para crear tarea");
    console.log("3- Para modificar tareas");
    console.log("4- Para borrar tareas");
    console.log("5- Salir");
    option = prompt("Ingrese una opcion: ");
    switch (option) {
      case "1":
        tareasMenu();
        break;
      case "2":
        const nuevaTarea = crearTarea();
        arrayTareas.push(nuevaTarea);
        break;
      case "3":
        modificarTarea();
        break;
      case "4":
        eliminarTarea();
        break;
      case "5":
        console.log("Saliendo...");
        break;
      default:
        console.log("Ingrese una opcion correcta");
        break;
    }
  } while (option != 5);
}

module.exports = { menuPrincipal, arrayTareas };
