//Para obtener los datos con los que jugar necesitaremos estudiar la documentación de la API
//  y buscar la url necesaria para los datos que queramos, para este paso os pedimos que de 
// verdad os esforcéis buscándola en la documentación, queremos la url que me traiga 
// los datos de todos los personajes de GOT, sin embargo, en la slide 
// siguiente tendréis la url directa de esos datos.

//URL de la documentación (para que indaguéis): https://thronesapi.com/

//Esta sería la URL final (la que deberéis utilizar para vuestra petición):

//https://thronesapi.com/api/v2/Characters

const select = document.getElementById('character-list');
const image = document.querySelector('.character-image');

let characters = [];

//Petición a la API para obtener los personajes
fetch('https://thronesapi.com/api/v2/Characters')
    .then(response => response.json())
    .then(data => {
        characters = data;
        //Rellenar el select con los nombres de los personajes
        characters.forEach(character => {
            const option = document.createElement('option');
            option.value = character.id;
            option.textContent = character.fullName;
            select.appendChild(option);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

//Evento para cambiar la imagen cuando se selecciona un personaje
select.addEventListener('change', (event) => {
    const selectedId = parseInt(event.target.value);
    const selectedCharacter = characters.find(character => character.id === selectedId);
    if (selectedCharacter) {
        image.src = selectedCharacter.imageUrl;
        image.alt = selectedCharacter.fullName;
    } else {
        image.src = '';
        image.alt = 'Character Image';
    }
}); 

//Al iniciar la página, la imagen estará vacía hasta que se seleccione un personaje
image.src = '';
image.alt = 'Character Image';