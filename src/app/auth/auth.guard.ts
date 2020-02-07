import { Injectable } from '@angular/core';
import {
  Route,
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('canActivate AuthGuard');

    const url: string = state.url;
    return this.handleCheckUserLoginStatus(url);
  }

  canActivateChild(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('canActivateChild AuthGuard');
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    console.log('AuthGuard canLaod?');
    return this.handleCheckUserLoginStatus(route.path);
  }

  handleCheckUserLoginStatus(targetUrl: string): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }
    this.authService.displayLoginAndOnSuccessReturnTo(targetUrl);
    return false;
  }
}
