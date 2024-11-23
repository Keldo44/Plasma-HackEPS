import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
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
    path: 'pokemon',
    loadChildren: () => import('./view/pages/pokemon/pokemon.module').then( m => m.PokemonPageModule)
  },
  {
    path: 'no-capturat',
    loadChildren: () => import('./view/pages/no-capturat/no-capturat.module').then( m => m.NoCapturatPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }