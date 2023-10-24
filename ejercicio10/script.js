var a = [
    "Desarrollo de Aplicaciones Web",
    12345678,
    "Administración de Sistemas Informáticos en Red",
    87654321,
    "Desarrollo de Aplicaciones Multiplataforma",
    12348765,
  ];
  
  var grado1 = a.find((el, idx) => typeof el === "string" && idx === 0);
  var id1 = a.find((el, idx) => typeof el === "number" && idx === 1);
  var b = [grado1, id1];
  console.log(b);
  
  var grado2 = a.find((el, idx) => typeof el === "string" && idx === 2);
  var id2 = a.find((el, idx) => typeof el === "number" && idx === 3);
  var c = [grado2, id2];
  console.log(c);
  
  var grado3 = a.find((el, idx) => typeof el === "string" && idx === 4);
  var id3 = a.find((el, idx) => typeof el === "number" && idx === 5);
  var d = [grado3, id3];
  console.log(d);