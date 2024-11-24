import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { HttpClient } from '@angular/common/http';
import { teams } from '../models/teams';
import { PokemonServiceService } from './pokemon-service.service';
import { Pokemons } from '../models/pokemons';

@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {
  public _teamPokemons: Pokemons[] = [];
  public _myTeam!: teams;

  constructor(private _apiService: ApiServiceService, private http: HttpClient, private pokemonService: PokemonServiceService) {
   
   }

}
