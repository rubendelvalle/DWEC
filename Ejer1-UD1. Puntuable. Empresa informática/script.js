// Definición de la clase EMPLEADO
class EMPLEADO {
  constructor(nombre = '', departamento = 'Informatico') {
    this.nombre = nombre;
    this.departamento = departamento;
  }
}

// Definición de la clase DIRECTOR
class DIRECTOR extends EMPLEADO {
  constructor(nombre = '') {
    super(nombre);
    this.informes = [];
  }
}

// Definición de la clase TRABAJADOR
class TRABAJADOR extends EMPLEADO {
  constructor(nombre = '') {
    super(nombre);
    this.proyectos = [];
  }
}

// Definición de la clase INGENIERO
class INGENIERO extends TRABAJADOR {
  constructor(nombre = '') {
    super(nombre);
    this.lenguajeProgramacion = '';
  }

  // Sobrescribe la propiedad lenguajeProgramacion con "Ingeniería"
  setLenguajeProgramacion() {
    this.lenguajeProgramacion = 'Ingeniería';
  }
}

// Creación de objetos
const empleado1 = new EMPLEADO('Juan Pérez', 'Recursos Humanos');
const empleado2 = new EMPLEADO();

const director1 = new DIRECTOR('Ana Smith');
const director2 = new DIRECTOR();

const trabajador1 = new TRABAJADOR('Luis García');
const trabajador2 = new TRABAJADOR();

const ingeniero1 = new INGENIERO('María López');
const ingeniero2 = new INGENIERO();

// Pruebas
console.log('Empleado 1:', empleado1);
console.log('Empleado 2:', empleado2);

console.log('Director 1:', director1);
console.log('Director 2:', director2);

console.log('Trabajador 1:', trabajador1);
console.log('Trabajador 2:', trabajador2);

console.log('Ingeniero 1:', ingeniero1);
console.log('Ingeniero 2:', ingeniero2);

ingeniero1.setLenguajeProgramacion();
console.log('Ingeniero 1 (con lenguaje de programación):', ingeniero1);
