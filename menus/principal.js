const readline = require("readline");
const prompt = require("prompt-sync")();
const Tarea = require("../Tarea");
const crear = require("./crearTarea");
const { tareasMenu, mostrarTareasPorFiltro } = require("./menuTareas");
let arrayTareas = [];
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
        if (arrayTareas) {
          tareasMenu();
        } else {
          console.log('arrayTareas no tiene un valor asignado.');
        }
        break;
      case "2":
        const nuevaTarea = crear();
        arrayTareas.push(nuevaTarea);
        break;
      case "3":
        //Falta implementar
        break;
      case "4":
        //Falta implementar
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
