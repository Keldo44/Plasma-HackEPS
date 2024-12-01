import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./view/pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'mis-pokes',
    loadChildren: () => import('./view/pages/mis-pokes/mis-pokes.module').then( m => m.MisPokesPageModule)
  },
  {
    path: 'pokedex',
    loadChildren: () => import('./view/pages/pokedex/pokedex.module').then( m => m.PokedexPageModule)
  },
  {
    path: 'pokemon/:id',
    loadChildren: () => import('./view/pages/pokemon/pokemon.module').then( m => m.PokemonPageModule)
  },
  {
    path: 'no-capturat',
    loadChildren: () => import('./view/pages/no-capturat/no-capturat.module').then( m => m.NoCapturatPageModule)
  },
  {
    path: 'zones',
    loadChildren: () => import('./view/pages/zones/zones.module').then( m => m.ZonesPageModule)
  },  {
    path: 'zones',
    loadChildren: () => import('./view/pages/zones/zones.module').then( m => m.ZonesPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
