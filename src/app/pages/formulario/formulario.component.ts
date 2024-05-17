import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formularioActual : number = 0
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onContinue() {
    this.formularioActual++
  }
  onBack(){
    this.formularioActual--
    if(this.formularioActual < 0){
      this.router.navigate(['/home']);
    }
  }

}
