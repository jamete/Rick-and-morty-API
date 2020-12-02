var itr = 0 ;
while(itr<21){
fetch(`https://rickandmortyapi.com/api/character/?page=${itr}`)
  .then((response) => response.json())
  .then((data) => makeCards(data.results));

function makeCards(charactersArray) {
  const cardContainer = document.querySelector("#card-container");
  console.log(charactersArray);
  charactersArray.forEach((character) => {
    cardContainer.innerHTML =
      cardContainer.innerHTML +
      `<div id="character_card-${character.id}">
    <h2>${character.name}</h2>
    <img src=${character.image}></img>
    <p>Status: ${character.status}</p>
    <p>Species: ${character.species}</p>

    </div>`;
  });
}
itr++;
}