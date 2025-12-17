//Crea una función llamada rollDice() que reciba como parámetro el numero de caras 
// que queramos que tenga el dado que deberá simular el codigo dentro de la función.

//Que la función use el parametro para simular una tirada de dado y retornar el resultado.

//Si no se te ocurre como hacer un numero aleatorio no te preocupes. 
// Busca información sobre la función de JavaScript Math.random()

function rollDice(faces) {
    return Math.floor(Math.random() * faces) + 1;
}

console.log('Tirada dado 6 caras: ' + rollDice(6)); 
console.log('Tirada dado 10 caras: ' + rollDice(10)); 
console.log('Tirada dado 20 caras: ' + rollDice(20));      
console.log('Tirada dado 4 caras: ' + rollDice(4)); 