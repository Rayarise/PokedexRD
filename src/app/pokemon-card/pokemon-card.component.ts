import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal,  NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { integer } from 'ts-json-object';
import { Pokemon } from '../Model/pokemon.model';
import { PokemonService } from '../Services/pokemon.service';

let ngbModalOptions: NgbModalOptions = {
  ariaLabelledBy: 'modal-basic-title',
  keyboard: true,
 

}
 
@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent implements OnInit {
  
  currentPokemon: Pokemon = new Pokemon
  evolutions1: any ;
  evolutions2: any ;
  evolutions3: any ;
  @ViewChild("content") modalcontent: any;

  constructor(private modalService: NgbModal, private pokemonService: PokemonService) { 
    
  }

  ngOnInit(): void {
  }

  open(pokemon : any){
    this.currentPokemon = pokemon
    this.getEvolution()
    this.modalService.open(this.modalcontent, ngbModalOptions).result.then((result)=>{
      if(result == 'cancel'){
      
      }
    });
 
  }

  getEvolution(){
    var evolutionChain
    this.pokemonService.getEvolutionsChain(this.currentPokemon.id).subscribe(response =>{
   
     evolutionChain = response.evolution_chain.url
     this.pokemonService.getEvolutions(evolutionChain).subscribe(response =>{
    
      this.evolutions1 = response.chain.species.name
      if(response.chain.evolves_to[0].species.name === void 0){
        
      }
      else{
        this.evolutions2 = response.chain.evolves_to[0].species.name
       
      }
      if(response.chain.evolves_to[0].evolves_to[0].species.name === void 0){
        
      }else{
        this.evolutions3 = response.chain.evolves_to[0].evolves_to[0].species.name
       
      }
     
     
     });
    });

  
  }
  showEvolution1(){
    
    var currentPokemon = {
      id: integer,
      name: String,
      sprite: String,
      type1: String,
      type2: String
      }
    this.pokemonService.getPokemons(this.evolutions1).subscribe(response =>{
      console.log(response.name)
     
      currentPokemon.name = response.name
      currentPokemon.sprite = response.sprites.front_default
      currentPokemon.type1 = response.types[0].type.name
      
      if(response.types[1] === void 0){
        currentPokemon.type2 = response.types[0].type.name
      }else{
        currentPokemon.type2 = response.types[1].type.name
      }
      this.modalService.dismissAll()
      this.open(currentPokemon)
    })
  }
  showEvolution2(){
    var currentPokemon = {
      id: integer,
      name: String,
      sprite: String,
      type1: String,
      type2: String
      }
    this.pokemonService.getPokemons(this.evolutions2).subscribe(response =>{
      
     
      currentPokemon.name = response.name
      currentPokemon.sprite = response.sprites.front_default
      currentPokemon.type1 = response.types[0].type.name
      
      if(response.types[1] === void 0){
        currentPokemon.type2 = response.types[0].type.name
      }else{
        currentPokemon.type2 = response.types[1].type.name
      }
      this.modalService.dismissAll()
      this.open(currentPokemon)
    })
  }
  showEvolution3(){
    var currentPokemon = {
      id: integer,
      name: String,
      sprite: String,
      type1: String,
      type2: String
      }
    this.pokemonService.getPokemons(this.evolutions3).subscribe(response =>{
      
     
      currentPokemon.name = response.name
      currentPokemon.sprite = response.sprites.front_default
      currentPokemon.type1 = response.types[0].type.name
      console.log(response)
      if(response.types[1] === void 0){
        currentPokemon.type2 = response.types[0].type.name
      }else{
        currentPokemon.type2 = response.types[1].type.name
      }
      this.modalService.dismissAll()
      this.open(currentPokemon)
    })
   
  }

}
