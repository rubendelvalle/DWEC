class Alumno {
    constructor(matricula, NIA, nombre, apellidos, curso, modulo) {
      this.matricula = matricula;
      this.NIA = NIA;
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.curso = curso;
      this.modulo = modulo;
    }
  
    iniciar(matricula, NIA, nombre, apellidos, curso, modulo) {
      this.matricula = matricula;
      this.NIA = NIA;
      this.nombre = nombre;
      this.apellidos = apellidos;
      this.curso = curso;
      this.modulo = modulo;
    }
  
    mostrarDatos() {
      console.log("Matrícula: " + this.matricula);
      console.log("NIA: " + this.NIA);
      console.log("Curso: " + this.curso);
      console.log("Módulo: " + this.modulo);
    }
  }
  
  // Ejemplo de uso de la clase Alumno
  const alumno1 = new Alumno("12345", "A12345", "Juan", "Pérez", "1A", "Matemáticas");
  alumno1.mostrarDatos();
  