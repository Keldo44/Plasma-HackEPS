import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisPokesPage } from './mis-pokes.page';

const routes: Routes = [
  {
    path: '',
    component: MisPokesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisPokesPageRoutingModule {}
