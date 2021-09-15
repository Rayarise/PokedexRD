import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { array, integer } from 'ts-json-object';
import { Pokemon } from '../Model/pokemon.model';
import { PokemonService } from '../Services/pokemon.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})


export class PokemonListComponent implements OnInit {
  currentPokemon: any;
  pokemons: any = []
  page = 1

  constructor(private pokemonService: PokemonService) {
    this.setPokemon1stGen()
    
   
   
   }

  ngOnInit(): void {
  
  }

  onTableDataChange(event: any): void{
    this.page = event;
  }
  //sets pokemons 1st generation to array
  setPokemon1stGen(){
    this.pokemons = []
  for(var i = 1; i<151;i++){
    this.pokemonService.getPokemons(i).subscribe(response =>{
      var currentPokemon = {
      id: integer,
      name: String,
      sprite: String,
      type: new Array
      }
     
      currentPokemon.id = response.id
      currentPokemon.name = response.name
      currentPokemon.sprite = response.sprites.front_default
      currentPokemon.type[0] = response.types[0].type.name

      if(response.types[1] === void 0){
        
      }else{
        currentPokemon.type[1] = response.types[1].type.name
      }
     
     
      
      this.pokemons.push(currentPokemon)
     
      this.pokemons.sort(function (a:any,b:any){
        return a.id - b.id
      })
    });
  }
  }
  setPokemon2ndGen(){
    this.pokemons = []
    for(var i = 151; i<250;i++){
      this.pokemonService.getPokemons(i).subscribe(response =>{
        var currentPokemon = {
        id: integer,
        name: String,
        sprite: String,
        type: new Array
        }
       
        currentPokemon.id = response.id
        currentPokemon.name = response.name
        currentPokemon.sprite = response.sprites.front_default
        currentPokemon.type[0] = response.types[0].type.name
  
        if(response.types[1] === void 0){
          
        }else{
          currentPokemon.type[1] = response.types[1].type.name
        }
       
       
        
        this.pokemons.push(currentPokemon)
       
        this.pokemons.sort(function (a:any,b:any){
          return a.id - b.id
        })
      });
    }
  }
    setPokemon3rdGen(){
      this.pokemons = []
      for(var i = 250; i<386;i++){
        this.pokemonService.getPokemons(i).subscribe(response =>{
          var currentPokemon = {
          id: integer,
          name: String,
          sprite: String,
          type: new Array
          }
         
          currentPokemon.id = response.id
          currentPokemon.name = response.name
          currentPokemon.sprite = response.sprites.front_default
          currentPokemon.type[0] = response.types[0].type.name
    
          if(response.types[1] === void 0){
            
          }else{
            currentPokemon.type[1] = response.types[1].type.name
          }
         
         
          
          this.pokemons.push(currentPokemon)
         
          this.pokemons.sort(function (a:any,b:any){
            return a.id - b.id
          })
        });
      }
     
    }

    setPokemon4thGen(){
      this.pokemons = []
      for(var i = 386; i<493;i++){
        this.pokemonService.getPokemons(i).subscribe(response =>{
          var currentPokemon = {
          id: integer,
          name: String,
          sprite: String,
          type: new Array
          }
         
          currentPokemon.id = response.id
          currentPokemon.name = response.name
          currentPokemon.sprite = response.sprites.front_default
          currentPokemon.type[0] = response.types[0].type.name
    
          if(response.types[1] === void 0){
            
          }else{
            currentPokemon.type[1] = response.types[1].type.name
          }
         
         
          
          this.pokemons.push(currentPokemon)
         
          this.pokemons.sort(function (a:any,b:any){
            return a.id - b.id
          })
        });
      }
     
    }
    setPokemon5thGen(){
      this.pokemons = []
      for(var i = 493; i<649;i++){
        this.pokemonService.getPokemons(i).subscribe(response =>{
          var currentPokemon = {
          id: integer,
          name: String,
          sprite: String,
          type: new Array
          }
         
          currentPokemon.id = response.id
          currentPokemon.name = response.name
          currentPokemon.sprite = response.sprites.front_default
          currentPokemon.type[0] = response.types[0].type.name
    
          if(response.types[1] === void 0){
            
          }else{
            currentPokemon.type[1] = response.types[1].type.name
          }
         
         
          
          this.pokemons.push(currentPokemon)
         
          this.pokemons.sort(function (a:any,b:any){
            return a.id - b.id
          })
        });
      }
     
    }
}

 
 



