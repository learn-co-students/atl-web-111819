class Trainer {
    constructor(id,name,pokemons){
      this.id = id
      this.name = name
      this.pokemons = pokemons
      this.element = document.createElement('div')
    }

    renderCards(){
      const card = this.element
      card.className = 'card'
      card.dataset.id = this.id

      const addBtn = document.createElement('button')
      addBtn.innerText = 'Add Pokemon'
      addBtn.dataset.trainerId = this.id

      const p = document.createElement('p')
      p.innerText = this.name

      const ul = document.createElement('ul')
      this.pokemons.forEach(pokemon => {
        const pokemonObj = new Pokemon(pokemon)
        const item = pokemonObj.renderListItem()
        ul.appendChild(item)
      })

      card.appendChild(p)
      card.appendChild(addBtn)
      card.appendChild(ul)
      
      return card
    }
}
// <div class="card" data-id="1"><p>Prince</p>
//   <button data-trainer-id="1">Add Pokemon</button>
//   <ul>
//   </ul>
// </div>
