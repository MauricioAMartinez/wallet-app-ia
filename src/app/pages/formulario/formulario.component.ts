import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TipoTrabajosService } from 'src/app/services/tipo-trabajos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  formularioActual: number = 0;

  personalInfo = {
    nombre: '',
    apellido: '',
    ingresos_mensuales: '',
    tipo_empleo: '',
    antiguedad_empleo: '',
    gastos_mensuales: '',
    motivo_solicitud: '',
    estado_civil: '',
    dependientes_financieros: '',
  };

  listaTrabajos = {}
  constructor(private router: Router, private _tipoTrabajoServices : TipoTrabajosService) {}

  ngOnInit(): void {
    this.getSorage();
    this.getTrabajos()
  }

  onContinue() {
    this.formularioActual++;
  }
  onBack() {
    this.formularioActual--;
    if (this.formularioActual < 0) {
      this.router.navigate(['/home']);
    }
  }

  onSubmit() {
    console.log(this.personalInfo);
    //1.LLamar datos local Storage
    //2.Enviar datos al servidor
    //3.Generar la solicitud a la API de python para la respuesta
  }

  submitForm(formulario: any): void {
    if (formulario.valid) {
      formulario.ngSubmit.emit();
    } else {
      console.log('Formulario Invalido');
    }
  }

  getSorage() {
    const data = JSON.parse(localStorage.getItem('personalInfo') || '{}');
    const { Nombre, Apellido } = data;
    this.personalInfo = {
      nombre: Nombre,
      apellido: Apellido,
      ingresos_mensuales: '',
      tipo_empleo: '',
      antiguedad_empleo: '',
      gastos_mensuales: '',
      motivo_solicitud: '',
      estado_civil: '',
      dependientes_financieros: '',
    };
  }

  getTrabajos() {
    this._tipoTrabajoServices.getTipoTrabajos().subscribe((data)=> {
      this.listaTrabajos = data
    })
  }
}
