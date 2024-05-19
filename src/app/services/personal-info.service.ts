import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PersonalInfoService {
  URL = 'http://localhost:3001/api/personalInfo';

  constructor(private http: HttpClient) {}
  
  getPersonalInfoByUserId(UUID: string) {
    return this.http.get(this.URL+'/user/'+UUID);
  }

  
}
