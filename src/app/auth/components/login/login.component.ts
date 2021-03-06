import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MyValidator } from '../../../core/validators/my.validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({});

  constructor(private authSerivce: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        MyValidator.password,
      ]),
    });
  }

  submit(): void {
    if (this.form.valid) {
      this.login();
    }
  }

  login(): void {
    this.authSerivce.login();
    this.router.navigate(['/']);
  }
}
