class Pokemon {
    constructor(pokemon){
      this.id = pokemon.id
      this.nickname = pokemon.nickname
      this.species = pokemon.species
      this.trainer_id = pokemon.trainer_id
      this.element = document.createElement('li')
      this.listener = function(e){
        console.log(e)
      }
    }

    renderListItem(){
      const item = this.element
      item.innerText = `${this.nickname} (${this.species})`

      const releaseBtn = document.createElement('button')
      releaseBtn.className = 'release'
      releaseBtn.dataset.pokemonId = this.id
      releaseBtn.innerText = 'Release'
      releaseBtn.addEventListener('click',this.listener)

      item.appendChild(releaseBtn)
      return item
    }

    //     <li>Jacey (Kakuna) <button class="release" data-pokemon-id="140">Release</button></li>
    //     <li>Zachariah (Ditto) <button class="release" data-pokemon-id="141">Release</button></li>
    //     <li>Mittie (Farfetch'd) <button class="release" data-pokemon-id="149">Release</button></li>
    //     <li>Rosetta (Eevee) <button class="release" data-pokemon-id="150">Release</button></li>
    //     <li>Rod (Beedrill) <button class="release" data-pokemon-id="151">Release</button></li>
}
