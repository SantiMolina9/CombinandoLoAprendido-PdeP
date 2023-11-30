const prompt = require("prompt-sync")();

function mostrarTareasPorFiltro(estado) {
  const { arrayTareas } = require("./principal");
  //Paradigma Declarativo y Funcion Pura
  const tareasFiltradas = arrayTareas.filter((T) => T.getEstado() === estado);
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
  }else{
    console.log(`No hay tareas ${estado} cargadas`);
  }
}
//Funcion impura
function tareasMenu() {
  console.log("Presione 1 para ver todas las tareas \n");
  console.log("Presione 2 para ver las tareas pendientes \n");
  console.log("Presione 3 para ver las tareas en curso \n");
  console.log("Presione 4 para ver las tareas completadas \n");
  let opcion = prompt();
  switch (opcion) {
    case "1":
      const { arrayTareas } = require("./principal");
      //Funcion impura
      if (arrayTareas.length > 0) {
        arrayTareas.forEach(function (tarea) {
          console.log(`Titulo: ${tarea.getTitulo()}`);
          console.log(`Descripcion: ${tarea.getDescripcion()}`);
          console.log(`Estado: ${tarea.getEstado()}`);
          console.log(`Dificultad: ${tarea.getDificultad()}`);
          console.log(`Fecha de Creacion: ${tarea.getFechaCreacion()}`);
          console.log(`Fecha de Vencimiento: ${tarea.getFechaVencimiento()}`);
          console.log("--------------");
        });
      }else{
        console.log(`No hay tareas cargadas`);
      }
      break;
    case "2":
      //Paradigma Declarativo
      mostrarTareasPorFiltro("pendiente");
      break;
    case "3":
      mostrarTareasPorFiltro("en curso");
      break;
    case "4":
      mostrarTareasPorFiltro("completada");
      break;
  }
}
module.exports = { tareasMenu, mostrarTareasPorFiltro };
