import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  authUser = {
    email: '',
    password: '',
  };

  error: boolean = false;
  textAlertError: string = '';

  constructor(
    private _authServices: AuthService,
    private _cookieService: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this._authServices.auth(this.authUser).subscribe(
      (...response) => {
        console.log('Response:', response);
        this._cookieService.set('token_acces', 'ffffffff', 4, '/');
        this.router.navigate(['/home'])
      },
      (error) => {
        console.error('Error:', error);
        this.onActivateError('Usuario o Contraseña no validos');
      }
    );
  }

  submitForm(authForm: any): void {
    if (authForm.valid) {
      authForm.ngSubmit.emit();
    } else {
      this.onActivateError('Formulario Invalido');
    }
  }

  onActivateError(text: string) {
    this.textAlertError = text;
    this.error = true;
    setTimeout(() => {
      this.error = false;
    }, 2000);
  }
}
