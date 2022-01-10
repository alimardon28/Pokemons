let elResult  = document.querySelector('.pokemons__result');
let elList = document.querySelector('.pokemons__list');

elResult.textContent = pokemons.length;

for(let pokemon of pokemons){

//CREATE

let newItem = document.createElement('li');
let newCard = document.createElement('div');
let newImg = document.createElement('img');
let newCardBody = document.createElement('div');
let newCardTitle = document.createElement('h5');
let newPokemonsTitle = document.createElement('p');
let newPokemonsTime = document.createElement('p');
let newPokemonsMass = document.createElement('span');
let newPokemonsAge = document.createElement('span');


//SET ATRIBUT

newItem.setAttribute('class' ,'pokemons__item');
newCard.setAttribute('class' , 'card pokemons__card border my-3');
newImg.setAttribute('class', ' card-img-top border-bottom border-dark border-2');
newImg.setAttribute('src', pokemon.img);
newCardBody.setAttribute('class' , 'card-body');
newCardTitle.setAttribute('class' , 'card-title fw-bold fs-5');
newPokemonsTitle.setAttribute('class' , 'pokemons__height fw-bold');
newPokemonsTime.setAttribute('class' , 'pokemons__time fw-bold')
newPokemonsMass.setAttribute('class' , 'pokemons__weight me-3 fw-bold fs-5');
newPokemonsAge.setAttribute('class' , 'pokemons__age fw-bold fs-5');

newCardTitle.textContent = pokemon.candy;
newPokemonsTitle.textContent = pokemon.candy_count;
newPokemonsTime.textContent = pokemon.spawn_chance;
newPokemonsMass.textContent = pokemon.weight;
newPokemonsAge.textContent = pokemon.height;

elList.appendChild(newItem);
newItem.appendChild(newCard);
newCard.appendChild(newImg);
newCard.appendChild(newCardBody);
newCard.appendChild(newCardBody);
newCardBody.appendChild(newCardTitle);
newCardBody.appendChild(newPokemonsTitle);
newCardBody.appendChild(newPokemonsTime);
newCardBody.appendChild(newPokemonsMass);
newCardBody.appendChild(newPokemonsAge);


}