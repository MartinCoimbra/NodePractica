const fs = require("fs");

console.clear();
console.log("++++++++++++++++");
console.log("  Tabla del: 5");
console.log("++++++++++++++++");
const base = 5;
let salida = "";

for (let i = 0; i <= 10; i++) {
  salida += ` ${base} x ${i} = ${base * i} \n`;
}

fs.writeFile(`tabla-del-${base}.txt`, salida, (err) => {
  if (err) throw err;
  console.log("Tabla creada");
});

//console.log(salida);
