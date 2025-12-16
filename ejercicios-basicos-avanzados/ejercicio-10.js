//Calcular un promedio es una tarea extremadamente común, 
// así que prueba a implementar esa funcionalidad en la siguiente función.

//Puedes usar este array para probarla:

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {

    // Manejo del caso de lista vacía
    if (numberList.length === 0) {
        return 0;
    }
  
    let sum = 0;

    for (let i = 0; i < numberList.length; i++) {
        sum += numberList[i];
    }
    return sum/numberList.length;

}
console.log(average(numbers));