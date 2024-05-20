import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-status-card',
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss'],
})
export class StatusCardComponent implements OnInit {
  @Input() textStatus: string = '';
  status : boolean = false;
  loading: boolean = false;
  constructor(
    private router: Router,
    private _solicitudServices: SolicitudService
  ) {}
  // 

  ngOnInit(): void {
    this.getStatuscard()
  }

  getStatuscard() {
    const storage = localStorage.getItem('personalInfo') ? true : false;
    const data = JSON.parse(localStorage.getItem('personalInfo') || '{}');
    if (storage) {
      const {Nombre, Apellido, PersonalInfoId} = data
      this._solicitudServices.generateSolicitud(PersonalInfoId).subscribe((response: any) => {
          const {prediction,predicBolean} = response
          this.textStatus = Nombre + ' ' + Apellido + ' Su ' + prediction
          this.status = predicBolean
      });
    } 
    this.loading = true
    setTimeout(() => {
        this.loading = false
    }, 3000);
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 10000);

  }

}
