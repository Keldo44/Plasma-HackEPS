import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { HttpClient } from '@angular/common/http';
import { Pokemons } from '../models/pokemons';
import { teams } from '../models/teams';
import { zones } from '../models/zones';
import { Router, CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  public _allPokemon: Pokemons[] = [];
  public _teamPokemons: Pokemons[] = [];
  public _myTeam!: teams;
  public _zone!: zones;
  public varioble: any;

  constructor(private _apiService: ApiServiceService, private http: HttpClient, private router: Router) {
    this.retrieveAllPokemon();
   }


  get allPokemon(): Pokemons[] { return this._allPokemon; }

  
 
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

  catchPokemonByZoneId(id: string) {
    console.log(this._myTeam.id);
  
    this._apiService.postZonesByUrl(id, this._myTeam.id).subscribe({
      next: (response: any) => {
        console.log('API Response:', response);
  
        // Extract the pokemon_uuid_list array
        const pokemonList = Array.isArray(response.pokemon_uuid_list)
          ? response.pokemon_uuid_list
          : [];
  
        // Filter and extract the latest pokemon_id
        const latestPokemon = pokemonList
          .filter((entry:any) => entry.pokemon_id !== undefined) // Ensure pokemon_id exists
          .map((entry:any) => entry.pokemon_id) // Extract pokemon_id
          .pop(); // Get the last one
  
        if (latestPokemon) {
          this.router.navigate(['/pokemon/' + latestPokemon]);
        } else {
          this.router.navigate(['no-capturat']);
        }
      },
      error: (err) => {
        console.error('Error fetching Pokémon by zone ID:', err);
        this.router.navigate(['no-capturat']);
      },
      complete: () => {
        console.log('API call completed.');
      },
    });
  }
  
  

  get teamPokemons(): Pokemons[] { return this._teamPokemons} 
}
