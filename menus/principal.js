const readline = require("readline");
const prompt = require("prompt-sync")();
const Tarea = require("../Tarea");

let arrayTareas = [];

do {
  console.log("Bienvenido al Menú principal \n");
  console.log("1- Para ver tareas");
  console.log("2- Para crear tarea");
  console.log("3- Para modificar tareas");
  console.log("4- Para borrar tareas");
  console.log("5- Salir");
  let option = prompt("Ingrese una opcion: ");
  switch (option) {
    case 1:
      //Falta implementar
      break;
    case 2:
      const nuevaTarea = crearTarea();
      arrayTareas.push(nuevaTarea);
      break;
    case 3:
      //Falta implementar
      break;
    case 4:
      //Falta implementar
      break;
    case 5:
      console.log("Saliendo...");
      //prueba de texto
      break;
    default:
      console.log("Ingrese una opcion correcta");
      break;
  }
} while (option != 5);
