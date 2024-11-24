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

  constructor(private pokemonService: PokemonServiceService) {
    this._teamPokemons = this.pokemonService._teamPokemons;
  }

  ngOnInit() {
    
  }

  get myTeam(): teams { return this.pokemonService._myTeam}
 
}
