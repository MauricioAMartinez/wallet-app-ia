import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { AlertComponent } from './alert/alert.component';
import { LoadingComponent } from './loading/loading.component';
import { SelectComponent } from './select/select.component';



@NgModule({
  declarations: [
    ButtonComponent,
    InputComponent,
    AlertComponent,
    LoadingComponent,
    SelectComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonComponent,
    InputComponent,
    AlertComponent,
    LoadingComponent,
    SelectComponent
  ]
})
export class ComponentsModule { }
