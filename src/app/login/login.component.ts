import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '@app/core/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  formControl: {
    email: FormControl;
    password: FormControl;
  };

  constructor(private authService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/home']);
    }

    this._setValidation();
  }

  login() {
    this.authService
      .login(this.formControl.email.value, this.formControl.password.value)
      .subscribe(data => {
        this.authService.setToken(data.token);
        this.router.navigate(['/home']);
      });
  }

  _setValidation() {
    this.formControl = {
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    };
  }
}
