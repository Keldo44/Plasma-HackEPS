import { Component, OnInit } from '@angular/core';
import { Pokemons } from 'src/app/models/pokemons';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';
import { TeamServiceService } from 'src/app/services/team-service.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {

  public searchedPokemon: Pokemons[] = [];
  public teamPokemons: Pokemons[] = []; 
  public allPokemons: Pokemons [] = [];

  constructor(
    private pokemonService: PokemonServiceService,
    private TeamService: TeamServiceService

  ) { }

  ngOnInit() {

    this.teamPokemons = this.pokemonService._teamPokemons; // Ex: carregar des del servei
    this.allPokemons = this.pokemonService._allPokemon;
    this.searchedPokemon = this.allPokemons; // Ex: carregar des del servei
  }

  pokemonCaught(pokemon: Pokemons): boolean{
    if(this.teamPokemons.find(p => p.id === pokemon.id)){
      return true;
    }else{
      return false;
    }
  }

  searchPokemon(event: any){
    const text = event.target.value?.trim()?.toLowerCase(); 
    if (text) {
      this.searchedPokemon = this.pokemonService.allPokemon.filter((poke: Pokemons) =>
        poke.name.toLowerCase().includes(text) && poke.isCaught == true
      );
    } else {
      this.searchedPokemon = this.pokemonService.allPokemon;
    }
  }
  
}
