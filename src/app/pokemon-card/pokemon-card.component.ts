import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal,  NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
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
  evolutionsName: any ;
  @ViewChild("content") modalcontent: any;

  constructor(private modalService: NgbModal, private pokemonService: PokemonService) { 
    
  }

  ngOnInit(): void {
  }

  open(pokemon : Pokemon){
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
      console.log(response) 
      console.log(response.chain.species.name)
      this.evolutionsName = response.chain.species.name
      if(response.chain.evolves_to[0].species.name === void 0){
        
      }
      else{
        this.evolutionsName += ',' + response.chain.evolves_to[0].species.name
        console.log(response.chain.evolves_to[0].species.name)
      }
      if(response.chain.evolves_to[0].evolves_to[0].species.name === void 0){
        
      }else{
        this.evolutionsName += ',' + response.chain.evolves_to[0].evolves_to[0].species.name
        console.log(response.chain.evolves_to[0].evolves_to[0].species.name)
      }
     
     
     });
    });

  
  }
}
