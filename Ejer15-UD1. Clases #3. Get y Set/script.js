class AlumnoDaw {
    constructor(nombre, apellido, email, edad) {
      this._nombre = nombre;
      this._apellido = apellido;
      this._email = email;
      this._edad = edad;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    set nombre(nombre) {
      this._nombre = nombre;
    }
  
    get apellido() {
      return this._apellido;
    }
  
    set apellido(apellido) {
      this._apellido = apellido;
    }
  
    get email() {
      return this._email;
    }
  
    set email(email) {
      this._email = email;
    }
  
    get edad() {
      return this._edad;
    }
  
    set edad(edad) {
      this._edad = edad;
    }
  }

const alumno = new AlumnoDaw("Juan", "Pérez", "juan.perez@example.com", 25);

console.log(alumno.nombre); // "Juan"
console.log(alumno.apellido); // "Pérez"
console.log(alumno.email); // "juan.perez@example.com"
console.log(alumno.edad); // 25

alumno.nombre = "Pedro";
alumno.apellido = "González";
alumno.email = "pedro.gonzalez@example.com";
alumno.edad = 26;

console.log(alumno.nombre); // "Pedro"
console.log(alumno.apellido); // "González"
console.log(alumno.email); // "pedro.gonzalez@example.com"
console.log(alumno.edad); // 26
