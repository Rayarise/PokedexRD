import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Pokemon } from '../Model/pokemon.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  //gets pokemons from API
  getPokemons(value : any): Observable<any>{
    var apiLink = 'https://pokeapi.co/api/v2/pokemon/'+ value +'/';
    return this.http.get(apiLink).pipe(map(response => {return response}));
        
  }

  getEvolutionsChain(id: any):Observable<any>{
    var apiLink1 = ' https://pokeapi.co/api/v2/pokemon-species/'+ id +'/';
    return this.http.get(apiLink1).pipe(map(response => {return response}));
  }

  getEvolutions(url :any):Observable<any>{
    var apiLink1 = url;
    return this.http.get(apiLink1).pipe(map(response => {return response}));
  }
}
