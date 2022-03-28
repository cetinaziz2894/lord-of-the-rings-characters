import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Character } from 'src/app/models/character.model';
import { Filter } from '../models/filter.model';

@Injectable({
  providedIn: 'root'
})
export class LordOfTheRingService {

  baseURL: string = "http://localhost:3000";
  apiCallData : any = new BehaviorSubject<any>({});
  items: any = new BehaviorSubject<any>({});
  names : any = new BehaviorSubject<any>([]);
  races : any = new BehaviorSubject<any>([]);
  hairColors : any = new BehaviorSubject<any>([]);
  genders : any = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

  getApiResponse():Observable<any> {
    return this.http.get(this.baseURL+'/character');
  }

  getData(){
    return this.apiCallData.asObservable();
  }

  setData(data: any){
    this.apiCallData.next(data);
  }

  setItems(data: any){
    this.items.next(data);
  }

  getItems(){
    return this.items.asObservable();
  }

  setDropdowns(data:any){
    let names: string[] | any[] = [];
    let races:string[] | any[] = [];
    let hairColors:string[] | any[] = [];
    let genders:string[] | any[] = [];
    data.map((el: { name: string; race: string; hair: string; gender: string; }) => {
      if(!names.includes(el.name) && el.name){
        names.push(el.name);
      }
      if(!races.includes(el.race) && el.race){
        races.push(el.race);
      }
      if(!hairColors.includes(el.hair) && el.hair){
        hairColors.push(el.hair);
      }
      if(!genders.includes(el.gender) && el.gender){
        genders.push(el.gender);
      }
    });
    this.names.next(names);
    this.races.next(races);
    this.hairColors.next(hairColors);
    this.genders.next(genders);
  }

  filter(filter:Filter){
    let array :any =[];
    if (filter.name) {
      array = filter.name && this.fiterMultiple(this?.apiCallData?._value,'name',filter.name);
    }else{
      if (filter.race) {
        array = array.length === 0 ? this?.apiCallData?._value : array;
        array = filter.race && this.fiterMultiple(array,'race',filter.race);
      }
      if (filter.gender) {
        array = array.length === 0 ? this?.apiCallData?._value : array;
        array = filter.gender && this.fiterMultiple(array,'gender',filter.gender);
      }
      if (filter.hair) {
        array = array.length === 0 ? this?.apiCallData?._value : array;
        array = filter.hair && this.fiterMultiple(array,'hair',filter.hair);
      }
    }
    this.items.next(array);
  };

  fiterMultiple(data: any[],filter: string,val:string){
   return data.filter((el: { [x: string]: any; }) =>{ return el[filter] === val})
  }

  getNames(){
    return this.names.asObservable();
  }

  getRaces(){
    return this.races.asObservable();
  }

  getHairs(){
    return this.hairColors.asObservable();
  }

  getGenders(){
    return this.genders.asObservable();
  }
}
