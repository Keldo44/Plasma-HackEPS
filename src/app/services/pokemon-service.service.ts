import { Injectable } from '@angular/core';
import { ApiServiceService } from './api-service.service';
import { HttpClient } from '@angular/common/http';
import { Pokemons } from '../models/pokemons';

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {

  private _allPokemon: Pokemons[] = [];

  constructor(private _apiService: ApiServiceService, private http: HttpClient) { }

  async retrieveAllPokemon() {

    this._allPokemon = [];
    this._apiService.allPokemon.subscribe({
      next: async (response: any) => {
        for (let index: number = 0; index < response.results.length; index++) {
          this.http.get<any[]>(response.results[index].url).subscribe({
            next: (value: any) => {
              this._allPokemon.push(value);
            },
            error: () => {
              console.log("Error");
            },
            complete: () => { 
            }
          });
        }
        
      },
      error: () => { },
      complete: () => {
       }
    });
  }



  get allPokemon(): Pokemons[] { return this._allPokemon; }
}
