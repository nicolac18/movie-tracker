import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '@app/core/authentication/authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  formControl: {
    email: FormControl;
    password: FormControl;
  };

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {
    this._setValidation();
  }

  register() {
    this.authService
      .register(this.formControl.email.value, this.formControl.password.value)
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
