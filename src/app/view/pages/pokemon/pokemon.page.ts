import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.page.html',
  styleUrls: ['./pokemon.page.scss'],
})
export class PokemonPage implements OnInit {

  public pokemon_id: number = 0;
  constructor(private pokemonservice: PokemonServiceService, private route: ActivatedRoute, private router: Router) {

    this.route.params.subscribe(params => {
      let id: string = params['id'];
      this.pokemon_id = parseInt(id);
      //this.retrievePokemon();
  
    });
   }

  ngOnInit() {
  }

  
  


}
