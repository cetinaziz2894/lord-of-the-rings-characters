import { Component, OnInit } from '@angular/core';
import { LordOfTheRingService } from 'src/app/services/lord-of-the-ring.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'lord-of-the-ring';
  apiResponse: any;
  items: any[] | undefined;
  errorMessage: string | undefined;
  itemsSubcription:any;
  isLoggedIn: boolean | undefined;
  roles: any;
  user: any;
  showAdminBoard: any;
  showModeratorBoard: any;
  username: any;

  constructor(private dataService: LordOfTheRingService,private tokenStorageService: TokenStorageService) {
  }
  ngOnInit(): void {
    this.itemsSubcription = this.dataService.getItems().subscribe(
      (item: any[]) => {
        return this.items = item;
      });

      this.isLoggedIn = !!this.tokenStorageService.getToken();
      if (this.isLoggedIn) {
        this.getData();
      }
  }

  getData(): void {
    this.errorMessage = "";
    this.dataService.getApiResponse().subscribe({
      next: response => {
        this.apiResponse = response;
        this.dataService.setData(this.apiResponse);
        this.dataService.setItems(this.apiResponse);
        this.dataService.setDropdowns(this.apiResponse);
      },
      error: error => {
        this.errorMessage = error;
      },
      complete: () => {
        // console.log(this.items);
      }
    })
  };

  ngOnDestroy() {
    this.itemsSubcription.unsubscribe();
  }
}
