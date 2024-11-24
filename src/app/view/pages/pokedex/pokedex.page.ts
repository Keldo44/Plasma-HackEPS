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

  constructor(
    private pokemonService: PokemonServiceService,
    private TeamService: TeamServiceService
  ) { }


  ngOnInit() {
    this.checkPokemonInTeam();
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
}
