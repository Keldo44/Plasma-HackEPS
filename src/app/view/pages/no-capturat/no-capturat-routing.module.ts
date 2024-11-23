import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoCapturatPage } from './no-capturat.page';

const routes: Routes = [
  {
    path: '',
    component: NoCapturatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoCapturatPageRoutingModule {}
