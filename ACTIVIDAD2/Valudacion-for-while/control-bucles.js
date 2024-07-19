//CONTROL DE BUCLES 

let listNum = [1,2,3,4,5,6,7,8,9];

for (let i = 0; i < listNum.length; i++) {
    //EXCLUSION DE VALOR
    if (listNum[i]=== 5) {
        continue;
    }
    console.log(listNum[i]);

    //interrumpir un bucle
    if (listNum[i] > 5) {
        break;
    }
}

