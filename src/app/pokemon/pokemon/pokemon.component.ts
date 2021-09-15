import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Pokemon } from 'src/app/Model/pokemon.model';
import { PokemonCardComponent } from 'src/app/pokemon-card/pokemon-card.component';

@Component({
  selector: '[app-pokemon]',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  currentPokemon: Pokemon = new Pokemon
  name: any;
  sprite:any;

  @ViewChild("pokemoncardmodal") pokemonCardModal!: PokemonCardComponent;
  @Output() showPokemonCard = new EventEmitter();
  @Input() pokemon!: Pokemon;
  
  constructor() {
    
   }

  ngOnInit(): void {
  }

  getName(pokemon: any){
    this.name = pokemon.name
    this.sprite = pokemon.sprite
    this.currentPokemon.name = pokemon.name
    this.currentPokemon.sprite = pokemon.sprite
    this.currentPokemon.type1 = pokemon.type[0]
    this.currentPokemon.type2 = pokemon.type[1]
    this.currentPokemon.id = pokemon.id
    
  }

  loadPokemonCard(pokemon: any){
    this.showPokemonCard.emit(pokemon);
  }

  openModal(){
    this.pokemonCardModal.open(this.currentPokemon)
    console.log(this.currentPokemon.name)
  }
}
