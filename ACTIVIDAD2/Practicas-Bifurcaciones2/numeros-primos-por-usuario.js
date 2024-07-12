//EJERCICIO 3
//REALIZAR UN PROGRAMA QUE MUESTRE TODOS LOS NUMEROS PRIMOS QUE SE UBIQUEN EN EL RANGO QUE EL USUARIO
//ELIJA 

let nin = 11; 
let nfin = 212; 


for (let i = nin; i <= nfin; i++) {
    let primo = true;
  for (let j = 2; j * j <= i; j++) {
    if (i % j === 0) {
      primo = false;
      break;
    }
  }
  if (primo) {
    console.log(i); 
  }
}