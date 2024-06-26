import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { AuthGuard } from './guards/auth.guard';
import { StatusCardComponent } from './pages/status-card/status-card.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent,canActivate:[AuthGuard]},
  {path:'formulario',component:FormularioComponent,canActivate:[AuthGuard]},
  {path:'statusCard',component:StatusCardComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
