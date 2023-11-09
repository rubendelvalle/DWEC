function saludar() {
    const horaActual = new Date().getHours();
  
    let saludo;
  
    if (horaActual >= 5 && horaActual < 12) {
      saludo = '¡Buenos días!';
    } else if (horaActual >= 12 && horaActual < 18) {
      saludo = '¡Buenas tardes!';
    } else {
      saludo = '¡Buenas noches!';
    }
  
    return saludo;
  }

console.log(saludar());
  