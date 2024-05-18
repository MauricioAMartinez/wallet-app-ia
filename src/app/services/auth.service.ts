import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  URL = 'http://localhost:3001/api/login';

  constructor(private http: HttpClient) {}

  auth(auth: any) {
    return this.http.post(this.URL, {...auth});
  }
}
