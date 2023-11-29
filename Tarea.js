class Tarea {

    constructor(titulo, descripcion, estado, dificultad, fechaCreacion, fechaVencimiento) {
      this._titulo = titulo;
      this._descripcion = descripcion;
      this._estado = estado;
      this._dificultad = dificultad;
      this._fechaCreacion = fechaCreacion;
      this._fechaVencimiento = fechaVencimiento;
    }

    mostrarInfo() {
      console.log(`Titulo: ${this.getTitulo}`);
      console.log(`Descripcion: ${this.getDescripcion}`);
      console.log(`Estado: ${this.getEstado}`);
      console.log(`Dificultad: ${this.getDificultad}`);
      console.log(`Fecha de Creacion: ${this.getFechaCreacion}`);
      console.log(`Fecha de Vencimiento: ${this.getFechaVencimiento}`);
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

    setEstado(estado) {
      if (["pendiente", "en curso", "terminado", "cancelado"].includes(estado)) {
        this._estado = estado;
    } else {
        console.log("Estado no válido. No se realizó ninguna modificación.");
    }
    }

    getDificultad() {
      return this._dificultad;
    }

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