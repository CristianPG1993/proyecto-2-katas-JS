//Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento 
// devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el 
// primero.

//Puedes usar este array para probar tu función:

const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];
function findLongestWord(stringList) {
    // Se declara una variable para almacenar la palabra más larga encontrada
    let longestWord = "";
    
    // Se itera a través de cada palabra en el array proporcionado
    for (let i = 0; i < stringList.length; i++) {
        // Se compara la longitud de la palabra actual con la longitud de la palabra 
        // más larga almacenada
        if (stringList[i].length > longestWord.length) {

            // Si la palabra actual es más larga, se actualiza la variable longestWord
            longestWord = stringList[i];
        }       
    }
    // Se devuelve la palabra más larga encontrada
    return longestWord;
}

console.log(findLongestWord(avengers));