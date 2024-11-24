import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { HttpClient } from '@angular/common/http';
import { Pokemons } from '../models/pokemons';
import { teams } from '../models/teams';
import { zones } from '../models/zones';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  public _allPokemon: Pokemons[] = [];
  public _teamPokemons: Pokemons[] = [];
  public _myTeam!: teams;
  public _zone!: zones;
  public varioble: any;

  constructor(private _apiService: ApiServiceService, private http: HttpClient) {
    this.retrieveAllPokemon();
   }


  get allPokemon(): Pokemons[] { return this._allPokemon; }

  
  manualIsCaught(){

    // console.log("El this es", this._allPokemon);

      // Itera sobre cada Pokémon de `searchedPokemon`

    //   console.log(this._allPokemon);


      // for (var mokepon in this._allPokemon){
        
      //   console.log("Mokepon es: ", mokepon);
      // }


    // this._allPokemon.forEach(pokemon => {
    //   // Comprova si el Pokémon està en l'equip
    //   const isInTeam = this._teamPokemons.some(teammate => teammate.id === pokemon.id);

    //   // Inicialitza o actualitza la propietat `isCaught`
    //   pokemon.isCaught = isInTeam;
    // });
    // console.log("Encara chuta!");

    // this._allPokemon.forEach(pokemon => {
    //   console.log("Mokepon es: ", pokemon.id);
    //   const isInTeam = this._teamPokemons.some(teammate => teammate.id == pokemon.id);
    //   pokemon.isCaught = isInTeam;
    // });

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
    let pokemon = this._allPokemon[id];
    return pokemon;
    
  }

  retrievePokemon(url: string) {
    this._apiService.getZonesByUrl(url).subscribe({
      next: async (response: any) => {
          this._zone = response;
      },
      error: () => { },
      complete: () => {
        this._apiService.postZonesByUrl(this._zone.id, this._myTeam);
       }
    });

  }

  retrievePostPokemon(){
    let variable = this._apiService.postZonesByUrl;
    this.varioble = variable;
  }

  get teamPokemons(): Pokemons[] { return this._teamPokemons} 
}
