// Definición de la clase EMPLEADO
class EMPLEADO {
    constructor(nombre = '', departamento = 'Informatico') {
      this.nombre = nombre;
      this.departamento = departamento;
    }
  }
  
  // Definición de la clase DirectorEjecutivo que hereda de EMPLEADO
  class DirectorEjecutivo extends EMPLEADO {
    constructor() {
      super();
      this.informes = [];
    }
  }
  
  // Definición de la clase TRABAJADOR que hereda de EMPLEADO
  class TRABAJADOR extends EMPLEADO {
    constructor() {
      super();
      this.proyectos = [];
    }
  }
  
  // Definición de la clase INGENIERO que hereda de TRABAJADOR
  class INGENIERO extends TRABAJADOR {
    constructor() {
      super();
      this.lenguajeProgramacion = '';
    }
  
    setLenguajeProgramacion(lenguaje) {
      this.lenguajeProgramacion = lenguaje;
    }
  }
  
  // Crear objetos y realizar pruebas
  const empleado1 = new EMPLEADO('Empleado 1', 'Desarrollo');
  const director1 = new DirectorEjecutivo();
  const trabajador1 = new TRABAJADOR();
  const ingeniero1 = new INGENIERO();
  
  ingeniero1.setLenguajeProgramacion('JavaScript');
  
  // Mostrar información de los objetos
  console.log('Empleado:', empleado1);
  console.log('Director Ejecutivo:', director1);
  console.log('Trabajador:', trabajador1);
  console.log('Ingeniero:', ingeniero1);
  