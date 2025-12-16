//Valores únicos: Crea una función que reciba por parámetro un array y 
// compruebe si existen elementos duplicados, en caso que existan los elimina
// para retornar un array sin los elementos duplicados.

//Pista: puedes generar un nuevo array y devolverlo.

//Puedes usar este array para probar tu función:

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(list) {
    
    // Declara un nuevo array para almacenar los elementos únicos
    const uniqueList = [];

    for (let i = 0; i < list.length; i++) {
        // Verifica si el elemento actual no está ya en el array de elementos únicos
        if (!uniqueList.includes(list[i])) {
            // Si no está, lo agrega al array de elementos únicos
            uniqueList.push(list[i]);
        }   
    }
    return uniqueList;

}

console.log(removeDuplicates(duplicates));