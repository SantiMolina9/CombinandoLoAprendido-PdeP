//Paradigma Orientado a Objetos
class Tarea {

    constructor(titulo, descripcion, estado, dificultad, fechaCreacion, fechaVencimiento) {
      this._titulo = titulo;
      this._descripcion = descripcion;
      this._estado = estado;
      this._dificultad = dificultad;
      this._fechaCreacion = fechaCreacion;
      this._fechaVencimiento = fechaVencimiento;
    }

    getTitulo() {
      return this._titulo;
    }

    setTitulo(titulo) {
      this._titulo = titulo;
    }
  
    getDescripcion() {
      return this._descripcion;
    }
    
    setDescripcion(descripcion) {
      this._descripcion = descripcion;
    }

    getEstado() {
      return this._estado;
    }
    //Funcion Pura (Restringido por el Paradigma POO)
    setEstado(estado) {
      if (["pendiente", "en curso", "terminado"].includes(estado)) {
        this._estado = estado;
    } else {
        console.log("Estado no válido. No se realizó ninguna modificación.");
    }
    }

    getDificultad() {
      return this._dificultad;
    }
    //Funcion Pura (Restringido por el Paradigma POO)
    setDificultad(dificultad) {
      if (["facil", "intermedio", "dificil"].includes(dificultad)) {
        this._dificultad = dificultad;
    } else {
        console.log("Dificultad no válida. No se pudo insertar, por defecto: Facil");
        this._dificultad = "facil";
    }
    }

    getFechaCreacion() {
      return this._fechaCreacion;
    }

    setFechaCreacion(fechaCreacion) {
      this._fechaCreacion = fechaCreacion;
    }
    
    getFechaVencimiento() {
      return this._fechaVencimiento;
    }

    setFechaVencimiento(fechaVencimiento) {
      this._fechaVencimiento = fechaVencimiento;
    }

}

module.exports = Tarea;