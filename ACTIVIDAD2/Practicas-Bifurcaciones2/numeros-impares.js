//Ejercicio2
//Realizar un programa que realize la suma de todos los numeros impares del 0 al 1000

 
let n=0;
for (let i = 0 ;i  <= 1000 ; i++){
    if (i  % 2!== 0) {
        n += i;
       
    }

}
console.log(n);