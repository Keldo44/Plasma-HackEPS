import { Component, OnInit } from '@angular/core';
import { Pokemons } from 'src/app/models/pokemons';
import { teams } from 'src/app/models/teams';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';
import { TeamServiceService } from 'src/app/services/team-service.service';

@Component({
  selector: 'app-mis-pokes',
  templateUrl: './mis-pokes.page.html',
  styleUrls: ['./mis-pokes.page.scss'],
})
export class MisPokesPage implements OnInit {

  public _teamPokemons: Pokemons[] = [];
  public searchedPokemon: Pokemons[] = [];

  constructor(private pokemonService: PokemonServiceService) {
    this._teamPokemons = this.pokemonService._teamPokemons;
    this.searchedPokemon = this._teamPokemons;
  }

  ngOnInit() {
    
  }

  searchPokemon(event: any){
    const text = event.target.value?.trim()?.toLowerCase(); 
    if (text) {
      this.searchedPokemon = this._teamPokemons.filter((poke: Pokemons) =>
        poke.name.toLowerCase().includes(text)
      );
    } else {
      this.searchedPokemon = this._teamPokemons;
    }
  }

  get myTeam(): teams { return this.pokemonService._myTeam}
 
}
