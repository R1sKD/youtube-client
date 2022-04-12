import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authSerivce: AuthService, private router: Router) {}

  login(): void {
    this.authSerivce.login();
    this.router.navigate(['/']);
  }
}
