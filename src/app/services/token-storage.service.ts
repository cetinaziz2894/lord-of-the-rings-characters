import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
const TOKEN_KEY = 'auth-token';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor(private router:Router) { }
  public saveToken(token: string): void {
    if (token) {
      window.sessionStorage.removeItem(TOKEN_KEY);
      window.sessionStorage.setItem(TOKEN_KEY, token);
    }
  }
  public getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  public logOutUser(): void {
    window.sessionStorage.clear();
    this.router.navigate(['login']);
  }
}