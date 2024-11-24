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

  constructor(
    private pokemonService: PokemonServiceService,
    private TeamService: TeamServiceService
  ) { }

  ngOnInit() {
    this.checkPokemonInTeam();
    this.searchedPokemon = this.pokemonService.allPokemon;
  }

  // Get all Pokémon
  get allPokemon(): Pokemons[] { 
    return this.pokemonService.allPokemon; 
  }

  // Get team Pokémon
  get teamPokemons(): Pokemons[] { 
    return this.TeamService._teamPokemons; 
  }

  // Method to check if all Pokémon IDs exist in the team
  checkPokemonInTeam(): void {
    this.allPokemon.forEach(pokemon => {
      pokemon.isCaught = this.teamPokemons.some(teamPokemon => teamPokemon.id === pokemon.id);
      if(pokemon.isCaught == undefined) {
        pokemon.isCaught = false
      }
    });
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
  
}
