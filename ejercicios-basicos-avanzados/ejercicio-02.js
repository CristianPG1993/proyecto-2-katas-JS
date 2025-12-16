// 1. Luke Skywalker cumple años
const jedi = {nombre: "Luke Skywalker",edad: 19};

jedi.edad = 25;

console.log("Ejercicio 1:");
console.log("Edad de " + jedi.nombre + " después de 6 años: " + jedi.edad);

// 2. Presentación al estilo Leia Organa

const nombre = "Leia";
const apellido = "Organa";
const edad = 20;

const presentacion = "Soy " + nombre + " " + apellido + ", tengo " + edad + " años y soy una princesa de Alderaan.";

console.log("Ejercicio 2:");
console.log(presentacion);

// 3. Calculando el coste total de sables de luz

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};

const costeTotal = sable1.precio + sable2.precio;

console.log("Ejercicio 3:");
console.log("El coste total de los sables de luz es: " + costeTotal + " créditos.");

// 4. Actualizando el precio final de las naves

let precioBaseGlobal = 10000;

// Cambia el precio base en esta linea modificando la variable
precioBaseGlobal = 25000;


const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};

nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;

console.log("Ejercicio 4:");
console.log("Precio final de " + nave1.nombre + ": " + nave1.precioFinal + " créditos.");
console.log("Precio final de " + nave2.nombre + ": " + nave2.precioFinal + " créditos.");
