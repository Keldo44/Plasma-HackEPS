import { Component, OnInit } from '@angular/core';
import { Pokemons } from 'src/app/models/pokemons';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.page.html',
  styleUrls: ['./pokedex.page.scss'],
})
export class PokedexPage implements OnInit {

  constructor(private pokemonService: PokemonServiceService) { }

  ngOnInit() {
    //console.log(this.allPokemon);
    
  }

  get allPokemon(): Pokemons[] { return this.pokemonService.allPokemon }
}
