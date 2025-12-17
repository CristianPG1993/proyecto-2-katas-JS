//Crea una función llamada swap que reciba un array y dos parametros 
// que sean indices del array.

//La función deberá intercambiar la posición de los valores de los indices que hayamos 
// enviado como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro 
// del array.

//Retorna el array resultante.

const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, index1, index2) {
    const temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
    return array;
}

console.log(swap([...fantasticFour], 0, 1)); // ["Mr. Fantástico", "La antorcha humana", "La mujer invisible", "La cosa"]
console.log(swap([...fantasticFour], 3, 2));// ["La antorcha humana", "Mr. Fantástico", "La cosa", "La mujer invisible"]
console.log(swap([...fantasticFour], 0, 3)); // ["La cosa", "Mr. Fantástico", "La mujer invisible", "La antorcha humana"]