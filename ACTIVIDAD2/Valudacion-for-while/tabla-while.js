//EJERCICIO 5
//realizar las tablas de multiplicar del 1 al 10 usando ciclo while o do while según considere

let num = 1;

do {
  let mul = 1;

  do {
    console.log(`${num} x ${mul} = ${num * mul}`);
    mul++;
  } while (mul <= 10);
  console.log("--------------------");
  num++;
} while (num <= 10);