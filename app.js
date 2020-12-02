var itr = 1 ;
while(itr<51){
fetch(`https://rickandmortyapi.com/api/character/${itr}`)
  .then((response) => response.json())
  .then((data) => makeCards(data));

function makeCards(character) {
  const cardContainer = document.querySelector("#card-container");
  console.log(character);
    cardContainer.innerHTML =
      cardContainer.innerHTML +
      `<div id="character_card-${character.id}">
    <h2>${character.name}</h2>
    <img src=${character.image}></img>
    <p>Status: ${character.status}</p>
    <p>Species: ${character.species}</p>

    </div>`;
}
itr++;
}