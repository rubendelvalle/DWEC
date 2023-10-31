const modulos = new Map([
  ["DAW1", "Introducción a la producción musical digital"],
  ["DAW2", "Estrategias de producción musical"],
  ["DAW3", "Producción musical avanzada"],
  ["DAW4", "Producción musical interactiva"]
]);

console.log("Cantidad de módulos: " + modulos.size);

for (let [clave, valor] of modulos) {
  console.log(clave + ": " + valor);
}

console.log("Abreviaturas de los módulos de 2DAW del Complejo de Cheste:");
for (let [clave, valor] of modulos) {
  if (clave.startsWith("2DAW")) {
    console.log(valor);
  }
}

console.log("Nombres de los módulos de 2DAW del Complejo de Cheste:");
for (let [clave, valor] of modulos) {
  if (clave.startsWith("2DAW")) {
    console.log(clave + ": " + valor);
  }
}

console.log("Verificando si el módulo está dentro de algún módulo:");
console.log(modulos.has("DAW5"));

console.log("Eliminando el módulo que menos te interese:");
modulos.delete("DAW1");

console.log("Nueva cantidad de módulos: " + modulos.size);

for (let [clave, valor] of modulos) {
  console.log(clave + ": " + valor);
}
