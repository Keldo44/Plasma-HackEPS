import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { HttpClient } from '@angular/common/http';
import { Pokemons } from '../models/pokemons';
import { teams } from '../models/teams';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  public _allPokemon: Pokemons[] = [];
  public _teamPokemons: Pokemons[] = [];
  public _myTeam!: teams;

  constructor(private _apiService: ApiServiceService, private http: HttpClient) {
    this.retrieveAllPokemon();
   }

  async retrieveAllPokemon() {

    this._allPokemon = [];
    this._apiService.allPokemon.subscribe({
      next: async (response: any) => {
        for (let index: number = 0; index < response.length; index++) {
              this._allPokemon.push(response[index]); 
        }
        
      },
      error: () => { },
      complete: () => {
        this.retrieveMyteam();
      }
    });
  }

  async retrieveMyteam() {
    this._apiService.myTeam.subscribe({
      next: async (response: any) => {
          this._myTeam = response;
      },
      error: () => { },
      complete: () => {
        this.retrivePokemonsOfMyTeam();
       }
    });
  }
  
  retrivePokemonsOfMyTeam(){
    for (let index = 0; index < this._myTeam.captured_pokemons.length; index++) {
      let id_pokemon = this._myTeam.captured_pokemons[index].pokemon_id-1;  
      this._teamPokemons.push(this._allPokemon[id_pokemon]);
    }
       
  }

  retrievePokemonById(id: number){
    //let pokemon = 

  }
  get allPokemon(): Pokemons[] { return this._allPokemon; }
  get teamPokemons(): Pokemons[] { return this._teamPokemons} 
}
