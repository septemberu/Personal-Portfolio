let pokeContainer = document.querySelector('.pokeContainer')
function getPokeData(url) {
    fetch(url).then(function (response) {
        response.json().then(function (pokemon) {
            console.log(pokemon.results)
            populatePokeCards(pokemon.results)
        })
    })
}

getPokeData("https://pokeapi.co/api/v2/pokemon")

// https://pokeapi.co/api/v2/pokemon/1/


function populatePokeCards (pokeArray) {
    pokeArray.forEach(pokemon => {
    let pokeScene = document.createElement('div')
    pokeScene.className = 'scene'
    let pokeCard = document.createElement('div')
    pokeCard.className = 'card'
    let pokeFront = document.createElement('div')
    pokeFront.className = 'card__face card__face--front'
    pokeFront.textContent = 'Front'
    let pokeBack = document.createElement('div')
    pokeBack.className = 'card__face card__face--back'
    pokeBack.textContent = "Back"

    pokeContent.appendChild(pokeFront)
    pokeContent.appendChild(pokeBack)
    pokeCard.appendChild(pokeContent)
    pokeContainer.appendChild(pokeCard)
    })
}

/* <div class="scene">
  <div class="card">
    <div class="card__face card__face--front">front</div>
    <div class="card__face card__face--back"><div><p>Hi,I'm here on the back</p></div></div>
  </div>
</div>
<p>Click card to flip.</p>*/