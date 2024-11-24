import { Component, OnInit } from '@angular/core';
import { Pokemons } from 'src/app/models/pokemons';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {

  public searchedPokemon: Pokemons[] = [];

  constructor(private pokemonService: PokemonServiceService) { }

  ngOnInit() {
    this.searchedPokemon = this.pokemonService.allPokemon;
  }

  searchPokemon(event: any){
    const text = event.target.value?.trim()?.toLowerCase(); 
    if (text) {
      this.searchedPokemon = this.pokemonService.allPokemon.filter((poke: Pokemons) =>
        poke.name.toLowerCase().includes(text)
      );
    } else {
      this.searchedPokemon = this.pokemonService.allPokemon;
    }
  }
  get allPokemon(): Pokemons[] { return this.pokemonService.allPokemon }
}
