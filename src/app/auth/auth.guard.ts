import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
      private authService: AuthService,
      private router: Router,
  ) { }
  canActivate(
      next: ActivatedRouteSnapshot,
      state: RouterStateSnapshot
  ): boolean {
    console.log('canActivate AuthGuard');

    const url: string = state.url;
    return  this.handleCheckUserLoginStatus(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): boolean {
    console.log('canActivateChild AuthGuard');
    return this.canActivate(route, state);
  } 

  handleCheckUserLoginStatus(targetUrl: string): boolean {
    if(this.authService.isLoggedIn) return true;

    this.authService.displayLoginAndOnSuccessReturnTo(targetUrl);
    return false;
  }
}
