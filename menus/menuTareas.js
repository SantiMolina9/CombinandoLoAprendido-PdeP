const prompt = require("prompt-sync")();
let readline = require("readline");
const Tarea = require("../Tarea");

function mostrarTareasPorFiltro(estado) {
  const { arrayTareas } = require("./principal");
  const tareasFiltradas = arrayTareas.filter((T) => T.estado === estado);
  if (tareasFiltradas.length > 0) {
    // Itera sobre las tareas filtradas y muestra sus atributos
    tareasFiltradas.forEach(function (tarea) {
      console.log(`Titulo: ${tarea.getTitulo()}`);
      console.log(`Descripcion: ${tarea.getDescripcion()}`);
      console.log(`Estado: ${tarea.getEstado()}`);
      console.log(`Dificultad: ${tarea.getDificultad()}`);
      console.log(`Fecha de Creacion: ${tarea.getFechaCreacion()}`);
      console.log(`Fecha de Vencimiento: ${tarea.getFechaVencimiento()}`);
      console.log("--------------");
    });
  }
}
function tareasMenu() {
  console.log("Presione 1 para ver todas las tareas \n");
  console.log("Presione 2 para ver las tareas pendientes \n");
  console.log("Presione 3 para ver las tareas completadas \n");
  console.log("Presione 4 para ver las tareas en curso \n");
  let opcion = prompt();
  switch (opcion) {
    case "1":
      //Falta implementar
      break;
    case "2":
      mostrarTareasPorFiltro("Pendientes");
      break;
    case "3":
      //Falta implementar
      break;
    case "4":
      //Falta implementar
      break;
  }
}
module.exports = { tareasMenu, mostrarTareasPorFiltro };
