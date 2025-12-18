//1.1 Basandote en el array siguiente, crea una lista ul > li
//dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];

const ul =  document.createElement('ul');

for (const country of countries) {
    const li = document.createElement('li');
    li.textContent = country;
    ul.appendChild(li);
}

document.body.appendChild(ul);



//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const elementoARemover = document.querySelector('.fn-remove-me');
if (elementoARemover) {
    elementoARemover.remove();
}


//1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos
//en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

const divPrintHere = document.querySelector('div[data-function="printHere"]');
const ulCars = document.createElement('ul');

for (const car of cars) {
    const li = document.createElement('li');
    li.textContent = car;
    ulCars.appendChild(li);
}

divPrintHere.appendChild(ulCars);

//1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento
//h4 para el titulo y otro elemento img para la imagen.
const countrieS = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

for (const countrie of countrieS) {
    const div = document.createElement('div');
    const h4 = document.createElement('h4');
    h4.textContent = countrie.title;
    const img = document.createElement('img');
    img.src = countrie.imgUrl;
    div.appendChild(h4);
    div.appendChild(img);
    document.body.appendChild(div);
}


//1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último
//elemento de la serie de divs.

const button = document.createElement('button');
button.textContent = 'Eliminar último div';
document.body.appendChild(button);

button.addEventListener('click', () => {
    const divs = document.querySelectorAll('body > div');
    if (divs.length > 0) {
        const lastDiv = divs[divs.length - 1];
        lastDiv.remove();
    }
});

//1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los
//divs que elimine ese mismo elemento del html.

const divs = document.querySelectorAll('body > div');
divs.forEach(div => {
    const button = document.createElement('button');
    button.textContent = 'Eliminar este div';
    div.appendChild(button);
    button.addEventListener('click', () => {
        div.remove();
    });
});