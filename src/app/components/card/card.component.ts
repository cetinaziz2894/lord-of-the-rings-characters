import { Component, Input, OnInit } from '@angular/core';
import { Character } from 'src/app/models/character.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() item: Character | undefined;
  image: string = 'empty';
  constructor() { }

  ngOnInit(): void {
    switch (this.item?.race) {
      case 'Human':
        this.image = 'man';
        break;
      case 'Elf':
        this.image = 'elf';
        break;
      case 'Dwarf':
        this.image = 'dwarf';
        break;
      case 'Hobbit':
        this.image = 'hobbit';
        break;
      case 'Maiar':
        this.image = 'holy';
        break;
      case 'Ent':
        this.image = 'ents';
        break;
      case 'Orcs':
        this.image = 'orc';
        break;
      case 'Elves':
        this.image = 'elf';
        break;
      case 'Men':
        this.image = 'man';
        break;
      case 'Dragons':
        this.image = 'dragon';
        break;
      case 'Great Spiders':
        this.image = 'spider';
        break;
      case 'Black Uruk':
        this.image = 'uruk';
        break;
      case 'Ainur':
        this.image = 'holy';
        break;
      case 'Raven':
        this.image = 'raven';
        break;
      case 'Dwarves':
        this.image = 'dwarf';
        break;
      case 'Men,Wraith':
        this.image = 'man';
        break;
      case 'God':
        this.image = 'god';
        break;
      case 'Dwarves':
        this.image = 'dwarf';
        break;
      case 'Wolfhound':
      this.image = 'hound';
        break;
      case 'Half-elven':
        this.image = 'halfelf';
        break;
      case 'Werewolves':
        this.image = 'wolf';
        break;
      case 'Goblin,Orc':
        this.image = 'orc';
        break;
      case 'Horse':
        this.image = 'horse';
        break;
      case 'Orc':
        this.image = 'orc';
        break;
      case 'Eagles':
      this.image = 'eagle';
        break;
      case 'Uruk-hai':
        this.image = 'uruk';
        break;
      case 'Great Eagles':
        this.image = 'eagle';
        break; 
      case 'Maiar,Balrogs':
        this.image = 'holy';
        break; 
      case 'Hobbits':
        this.image = 'hobbit';
        break; 
      case 'Uruk-hai,Orc':
        this.image = 'uruk';
        break; 
      case 'Orc,Goblin':
        this.image = 'orc';
        break; 
      case 'Urulóki':
        this.image = 'orc';
        break; 
      case 'Ents':
        this.image = 'ents';
        break; 
      case 'Balrog':
        this.image = 'balrogs';
        break; 
      case 'Eagle':
        this.image = 'eagle';
        break; 
      case 'Stone-trolls':
        this.image = 'troll';
        break; 
      case 'Vampire':
        this.image = 'vampire';
        break; 
      default:
        break;
    }
  }

  goToPage(url:string){
    window.open(url, '_blank');
  }

}
