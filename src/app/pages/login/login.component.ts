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
    email: 'user1@example.com',
    password: 'user1password',
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
      (response: any) => {
        const {token,UserId,RolUserId} = response
  
        if (token) {
     
          this._cookieService.set('token_acces', token, 4, '/');
          this._cookieService.set('UserId', UserId, 4, '/');
          this._cookieService.set('RolUserId', RolUserId, 4, '/');
          this.router.navigate(['/home']);
        } else {
          console.error('Token no recibido');
          this.onActivateError('Token no recibido');
        }
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
