import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home-component', component: HomeComponent},
  {path: 'pokemon-list-component', component: PokemonListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
