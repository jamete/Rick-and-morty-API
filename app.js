var itr = 1 ;
while(itr<53){
fetch(`https://rickandmortyapi.com/api/character/${itr}`)
  .then((response) => response.json())
  .then((data) => makeCards(data));

function makeCards(character) {
  const cardContainer = document.querySelector("#card-container");
  console.log(character);
    cardContainer.innerHTML =
      cardContainer.innerHTML +
      `<div class="character-container">
        <div id="character_card-${character.id}">
          <img class="img-card"src=${character.image}></img>
          <h2 class="card-title">${character.name}</h2>
          <p>Status: ${character.status}</p>
          <p>Species: ${character.species}</p>
          
        </div>
      </div>`;
}
itr++;
}