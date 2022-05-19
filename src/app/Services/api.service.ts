import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _url: string = 'http://localhost:8000/api';
  constructor(private http: HttpClient) { }

  saveUserData(data){
    return this.http.post(this._url + '/register', data);
  }
  savePetsData(data){
    return this.http.post(this._url + '/pets', data);
  }

  login(data){
	  return this.http.post(this._url + '/login', data);
  }

  logout(data){
    return this.http.post(this._url + '/logout', data);
  }

  getUsers(login){
    return this.http.get(this._url + '/users', login);
  }

  

}
