import { Component, OnInit } from '@angular/core';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';
import { TeamServiceService } from 'src/app/services/team-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  public img: string = '../../../../assets/img/';
  constructor() { }


  ngOnInit() {
  }

}
