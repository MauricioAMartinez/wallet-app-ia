import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormularioComponent } from './formulario/formulario.component';
import { ComponentsModule } from '../components/components.module';
import { FormsModule } from '@angular/forms';
import { StatusCardComponent } from './status-card/status-card.component';



@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    FormularioComponent,
    StatusCardComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    FormsModule
  ]
})
export class PagesModule { }
