import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from './token-storage.service';
const AUTH_API = 'http://localhost:3000/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient,private tokenStorage: TokenStorageService) { }
  login(email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + '/users/login', {
      email,
      password
    }, httpOptions);
  }

  logout() {
    this.tokenStorage.logOutUser();
  }
  
  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }
}
