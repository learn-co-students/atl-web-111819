const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`


document.addEventListener('DOMContentLoaded',function(){
  // Render all the trainer cards with pokemons => GET

  fetch(TRAINERS_URL)
  .then(function(res){
    return res.json()
  })
  .then(function(trainers){
    trainers.forEach(function(trainer){
      renderTrainerCard(trainer)
    })
  })

  function renderTrainerCard(trainer){
    const main = document.querySelector('main')

    const card = document.createElement('div')
    card.className = 'card'
    card.dataset.id = trainer.id

    const trainerName = document.createElement('p')
    trainerName.innerText = trainer.name

    const addPokemonBtn = document.createElement('button')
    addPokemonBtn.dataset.trainerId = trainer.id
    addPokemonBtn.innerText = "Add Pokemon"
    addPokemonBtn.addEventListener('click',function(e){
      createPokemon(e)
    })

    const pokemonList = document.createElement('ul')

    trainer.pokemons.forEach(function(pokemon){
      const li = renderPokemonItem(pokemon)
      pokemonList.appendChild(li)
    })

    card.appendChild(trainerName)
    card.appendChild(addPokemonBtn)
    card.appendChild(pokemonList)

    main.appendChild(card)

  }

  function createPokemon(e){
    // Trainer id ✅

    const trainer_id = e.target.dataset.trainerId

    fetch(POKEMONS_URL,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ trainer_id: trainer_id })
    })
    .then(function(res){
      return res.json()
    })
    .then(function(newPokemon){
      const pokemonList = e.target.parentElement.querySelector('ul')
      const pokemonListItem = renderPokemonItem(newPokemon)

      pokemonList.appendChild(pokemonListItem)
    })
  }

  function renderPokemonItem(pokemon){
    const pokemonListItem = document.createElement('li')
    pokemonListItem.innerText = `${pokemon.nickname} (${pokemon.species})`

    const releasebtn = document.createElement('button')
    releasebtn.className = 'release'
    releasebtn.dataset.pokemonId = pokemon.id
    releasebtn.innerText = 'Release'
    releasebtn.addEventListener('click',function(e){
      releasePokemon(e)
    })

    pokemonListItem.appendChild(releasebtn)
    return pokemonListItem
  }

  function releasePokemon(e){
    const pokemonId = e.target.dataset.pokemonId


    fetch(POKEMONS_URL+`/${pokemonId}`,{
      method: 'DELETE'
    })
    .then(function(res){
      return res.json()
    })
    .then(function(msg){
      e.target.parentElement.remove()
    })
    .catch(function(err){
      console.error(err.message)
    })
  }

})
