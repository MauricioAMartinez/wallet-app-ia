import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { PersonalInfoService } from 'src/app/services/personal-info.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    private _cookieServices: CookieService,
    private _personalInfoServices: PersonalInfoService,
    private _router: Router
  ) {}

  personalInfo = {
    PersonalInfoId: '',
    Nombre: '',
    Apellido: '',
    Direccion: '',
    Email: '',
    Phone: '',
  };

  loading = false;

  ngOnInit(): void {
    this.validateStorage();
  }

  getUUID() {
    const userId = this._cookieServices.get('UserId');
    return userId ? userId : ''; 
  }

  getJWT() {
    const token = this._cookieServices.get('token_acces');
    return token ? token : '';
  }

  getPersonalInfo() {
    this.loading = true;
    const userId = this.getUUID();
    if (!userId) {
     
      this.loading = false;
      return;
    }

    this._personalInfoServices
      .getPersonalInfoByUserId(userId)
      .subscribe(
        (data: any) => {
          const { Nombre, Apellido, Direccion, Email, Phone, PersonalInfoId } = data[0];
          this.personalInfo = {
            PersonalInfoId: PersonalInfoId,
            Nombre: Nombre,
            Apellido: Apellido,
            Direccion: Direccion,
            Email: Email,
            Phone: Phone,
          };
          this.savePersonalInfoToLocalStorage();
          setTimeout(() => {
            this.loading = false; 
          }, 2000);
        },
        (error) => {
          console.log(error);
          this.loading = false; 
        }
      );
  }

  savePersonalInfoToLocalStorage() {
    localStorage.setItem('personalInfo', JSON.stringify(this.personalInfo));
  }

  validateStorage() {
    const storage = localStorage.getItem('personalInfo') ? true : false;
    const data = JSON.parse(localStorage.getItem('personalInfo') || '{}');
    if (storage) {
      this.personalInfo = data;
    } else {
      this.getPersonalInfo();
    }
  }

  gotoForm() {
    this.loading = true;
    setTimeout(() => {
      this.loading = false;
      this._router.navigate(['/formulario']);
    }, 1000);

  }
}
