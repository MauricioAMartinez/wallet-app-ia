import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(private http : HttpClient) { }

  URL = 'http://127.0.0.1:5000/predict?id='

  generateSolicitud (id:string){
    return this.http.get(this.URL+id)
  }
}
