import { Component, OnInit } from '@angular/core';
import { LordOfTheRingService } from 'src/app/services/lord-of-the-ring.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  itemList!: any[];
  itemsSubcription: any;
  currentUser: any;
  constructor(private dataService: LordOfTheRingService,private token: TokenStorageService) { }

  ngOnInit(): void {
    this.itemsSubcription = this.dataService.getItems().subscribe(
      ( item: any) => {
        return this.itemList = Array.from(Object.values(item));;
      });
  }

  ngOnDestroy() {
    this.itemsSubcription.unsubscribe();
  }

}
