//Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html
//que imprima cada uno de los albums. Que tenga la apariencia de una web completa dentro de lo posible.
document.addEventListener('DOMContentLoaded', () => {

    const albums = [
        "De Mysteriis Dom Sathanas",
        "Reign of Blood",
        "Ride the Lightning",
        "Painkiller",
        "Iron Fist",
    ];

    const divContainer = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = 'Lista de Albums';
    divContainer.appendChild(h1);
    const ul = document.createElement('ul');

    for (const album of albums) {
        const li = document.createElement('li');
        li.textContent = album;
        ul.appendChild(li);
    }

    divContainer.appendChild(ul);
    document.body.appendChild(divContainer);

    //Estilos básicos para mejorar la apariencia
    divContainer.style.fontFamily = 'Arial, sans-serif';
    divContainer.style.width = '500px';
    divContainer.style.margin = '40px auto';
    divContainer.style.padding = '20px';
    divContainer.style.border = '1px solid #ccc';
    divContainer.style.borderRadius = '8px';
    divContainer.style.backgroundColor = '#f9f9f9';
    h1.style.color = '#333';
    ul.style.listStyleType = 'square';
    ul.style.padding = '0';
    ul.style.margin = '0';
    for (const li of ul.children) { 
        li.style.padding = '8px 0';
        li.style.borderBottom = '1px solid #eee';
    }

});



