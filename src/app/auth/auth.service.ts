import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn: boolean = false;
  redirectUrl: string;

  constructor(
      private router: Router,
  ){}

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap((val: boolean) => this.isLoggedIn = val)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }

  displayLoginAndOnSuccessReturnTo(targetUrl: string) {
    this.redirectUrl = targetUrl;
    this.router.navigate(['/login', {redirectUrl: targetUrl}]);
  }
}
