//Ahora realizaremos una petición a la PokeAPI, queremos mostrar al entrar en la página la imagen de un Pokemon, 
// la magia estará en que cada vez que recargues la página, será un nuevo Pokemon dentro de la primera generación de Pokemon,
//  es decir, del 1 al 151.

//Los Pokemon no solo tienen una imagen, si no que tendrán muchas, hay que hallar la manera de encontrar la que más os guste.



//Para ello el HTML será muy sencillo, y la URL esta vez os la aportaremos directamente, aunque os aconsejamos echarle un ojo a la documentación ya que es muy completa.

//Documentación: https://pokeapi.co/

//URL: https://pokeapi.co/api/v2/pokemon/1

//Tened en cuenta que esta URL se refiere al pokemon número 1, que es bulbasaur, 
// debemos hallar la manera de con una url similar ir consiguiendo pokemons aleatorios dentro de unos límites.

const img = document.querySelector('.random-image');
const randomPokemonId = Math.floor(Math.random() * 151) + 1;

const url = `https://pokeapi.co/api/v2/pokemon/${randomPokemonId}`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    const imageUrl = data.sprites.other['official-artwork'].front_default;
    img.src = imageUrl;
    img.alt = data.name;
  })
    .catch(error => console.error('Error fetching Pokémon data:', error));
    