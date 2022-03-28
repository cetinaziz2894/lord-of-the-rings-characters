
import {  CanActivate,  ActivatedRouteSnapshot,  RouterStateSnapshot,  Router} from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    let logged = window.sessionStorage.getItem('auth-token');
    if (logged) {
      return true;
    }else{
      this.router.navigate(["login"]);
      console.log("Sayfaya erişim için sisteme giriş yapmalısınız!");
      return false;
    }
  }
}