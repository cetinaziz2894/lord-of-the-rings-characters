import { Component, OnInit } from '@angular/core';
import { Filter } from 'src/app/models/filter.model';
import { LordOfTheRingService } from 'src/app/services/lord-of-the-ring.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  optionsNameSubcription: any;
  optionsHairsSubcription: any;
  optionsGendersSubcription: any;
  optionsRacesSubcription: any;
  names!:string[];
  hairs!:string[];
  genders!:string[];
  races!:string[];

  filter:Filter = {
    name: '',
    hair: '',
    race: '',
    gender: ''
  };

  constructor(private dataService: LordOfTheRingService) {
   }

  ngOnInit(): void {
    this.optionsNameSubcription = this.dataService.getNames().subscribe((item:any[])=>{
      return this.names = item;
    });
    this.optionsHairsSubcription = this.dataService.getHairs().subscribe((item:any[])=>{
      return this.hairs = item;
    });
    this.optionsGendersSubcription = this.dataService.getRaces().subscribe((item:any[])=>{
      return this.races = item;
    });
    this.optionsRacesSubcription = this.dataService.getGenders().subscribe((item:any[])=>{
      return this.genders = item;
    });
  }

  filterName(val:string){
    this.filter.name = val;
    this.dataService.filter(this.filter);
    this.filter.hair = '';
    this.filter.gender ='';
    this.filter.race='';
    const details = document.querySelectorAll("details");
    details[0].removeAttribute('open');
  };

  filterHair(val:string){
    this.filter.name = '';
    this.filter.hair = val;    
    this.dataService.filter(this.filter);
    const details = document.querySelectorAll("details");
    details[1].removeAttribute('open');
  };

  filterGender(val:string){
    this.filter.name = '';
    this.filter.gender = val;    
    this.dataService.filter(this.filter);
    const details = document.querySelectorAll("details");
    details[2].removeAttribute('open');
  };

  filterRace(val:string){
    this.filter.name = '';
    this.filter.race = val;
    this.dataService.filter(this.filter);
    const details = document.querySelectorAll("details");
    details[3].removeAttribute('open');
  };

  ngOnDestroy() {
    this.optionsNameSubcription.unsubscribe();
    this.optionsHairsSubcription.unsubscribe();
    this.optionsGendersSubcription.unsubscribe();
    this.optionsRacesSubcription.unsubscribe();
  }


}
