const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener('DOMContentLoaded',function(){
  const main = document.querySelector('main')

  fetch(TRAINERS_URL)
  .then(res => res.json())
  .then(trainers => {

    trainers.forEach(trainer => {
      const trainerObj = new Trainer(trainer.id,trainer.name,trainer.pokemons)
      const card = trainerObj.renderCards()
      main.appendChild(card)
    })

  })
})
