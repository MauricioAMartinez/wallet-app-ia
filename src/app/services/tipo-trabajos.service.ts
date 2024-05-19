import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TipoTrabajosService {

  URL = 'http://localhost:3001/api/';

  constructor(private http : HttpClient) { }

  getTipoTrabajos(){
    return this.http.get(this.URL+'trabajo');
  }
}
