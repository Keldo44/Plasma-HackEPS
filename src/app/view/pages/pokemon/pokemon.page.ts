import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemons } from 'src/app/models/pokemons';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  public pokemon_id: number = 0;
  public pokemon: Pokemons | undefined;
  constructor(private pokemonservice: PokemonServiceService, private route: ActivatedRoute, private router: Router) {

    this.route.params.subscribe(params => {
      let id: number = params['id'];
      this.pokemon_id = id;
    });
   }

  ngOnInit() {
    this.pokemon = this.pokemonservice.retrievePokemonById(this.pokemon_id-1);
    console.log(this.pokemon);
    
  }

  tipusColor(tipus: any): any {
    const color = tipus.type.name;
    return {'background': 'var(--ion-color-' + color + ')', 'color': 'black', 'font-size': 'x-small'};
  }
  
  getStatColor(baseStat: number): string {
    if (baseStat > 0 && baseStat < 50) {
      return 'red';
    } else if (baseStat >= 50 && baseStat < 100) {
      return 'yellow';
    }else {
      return 'green';
    }
  }
  
}
