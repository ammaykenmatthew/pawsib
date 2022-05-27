import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './api.schema';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  id :any;
  name: any;
  email: any;
  number: any;
  role: any;
  place: any;
  password: any;

  private _url: string = 'http://localhost:8000/api';
  constructor(
    private http: HttpClient,
    
  ) { }

  addUser( data: {name, email, number, role, place, password}) :Observable<Users>  {
    return this.http.post<Users>(`${this._url}/register`, data);
}
 
    

}
