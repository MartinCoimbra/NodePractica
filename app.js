const { crearArchivo } = require("./helpers/multiplicar");

console.clear();
const base = 4;
crearArchivo(base)
  .then((nombreDeArchivo) => console.log(nombreDeArchivo, "creado"))
  .catch((err) => console.log(err));
