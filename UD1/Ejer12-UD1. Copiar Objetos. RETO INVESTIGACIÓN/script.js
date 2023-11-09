// Copia este código dentro de VSC
let persona = {nombre: "NombreInventado", profesion: "Informático DAW"};

// Al copiar los valores de un objeto no estamos copiando dichos valores,
// sino la la referencia al espacio de memoria.

let antonioObj = persona;

antonioObj.nombre = "Pepito";
antonioObj.edad = "55";

console.log(antonioObj.nombre);
console.log(persona.nombre);

console.log(antonioObj.profesion);
console.log(persona.profesion);

// ¿Qué está pasando?

// Imprime Pepito e Informático DAW dos veces.

// Realiza y prueba cómo se desestructura un objeto.

// const { nombre, profesion } = persona;

// Mira la teoría y soluciona el problema.

// const antonioObj = Object.assign({}, persona);
