import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component'; // Nueva ruta para Pokémon

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'pokemon', // Nueva ruta para Pokémon
    component: PokemonComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];