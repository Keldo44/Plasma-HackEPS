import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoCapturatPageRoutingModule } from './no-capturat-routing.module';

import { NoCapturatPage } from './no-capturat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoCapturatPageRoutingModule
  ],
  declarations: [NoCapturatPage]
})
export class NoCapturatPageModule {}
