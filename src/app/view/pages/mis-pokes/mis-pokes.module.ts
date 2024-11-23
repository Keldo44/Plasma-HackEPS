import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisPokesPageRoutingModule } from './mis-pokes-routing.module';

import { MisPokesPage } from './mis-pokes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisPokesPageRoutingModule
  ],
  declarations: [MisPokesPage]
})
export class MisPokesPageModule {}
