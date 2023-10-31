class Usuario {
    constructor(nombre, email, contraseña) {
      this.nombre = nombre;
      this.email = email;
      this.contraseña = contraseña;
    }
  
    saludo() {
      console.log(`Hola, soy ${this.nombre}`);
    }
  
    login(email, contraseña) {
      if (email === this.email && contraseña === this.contraseña) {
        return true;
      } else {
        return false;
      }
    }
  }
  
  class AlumnoASIR extends Usuario {
    constructor(nombre, email, contraseña, cursos = [], activo = true) {
      super(nombre, email, contraseña);
      this.cursos = cursos;
      this.activo = activo;
    }
  }
  
  class AlumnoDAW extends Usuario {
    constructor(nombre, email, contraseña, cursos = [], activo = true) {
      super(nombre, email, contraseña);
      this.cursos = cursos;
      this.activo = activo;
    }
  }
  
  // Ejemplo de uso
  const usuarioAsir = new AlumnoASIR("Toni", "a@gmail.com", "1234", ["Programación Web I", "Introducción a la Programación"], true);
  const usuarioDaw = new AlumnoDAW("Paco", "b@gmail.com", "12345", ["Bases de Datos I", "Introducción a la Programación Avanzada"], false);
  
  console.log(usuarioDaw.login("a@gmail.com", "1234")); // true
  console.log(usuarioDaw.login("b@gmail.com", "12345")); // false
  console.log(usuarioAsir.login("paco@gmail.com", "1234")); // false
  