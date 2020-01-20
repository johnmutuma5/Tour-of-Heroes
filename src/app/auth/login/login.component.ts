import { Component }   from '@angular/core';
import { Router, ActivatedRoute }      from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  message: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
  ) {
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in ...';
    console.log();

    this.authService.login().subscribe(() => {
      this.setMessage();
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        const redirectUrl = this.activatedRoute.snapshot.paramMap.get('redirectUrl');

        // Redirect the user
        this.router.navigateByUrl(this.router.parseUrl(redirectUrl ? redirectUrl: '/admin'));
      }
    });
  }

  logout() {
    this.authService.logout();
    this.setMessage();
  }
}
