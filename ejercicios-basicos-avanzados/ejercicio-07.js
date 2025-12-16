//Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.


function greaterNumber(numberOne , numberTwo) {
  
    if (numberOne > numberTwo) {
        console.log(numberOne);
    } else if (numberTwo > numberOne) {
        console.log(numberTwo);
    } else {
        console.log("Los dos números son iguales");
    }
}

console.log(greaterNumber(10, 5)); 
