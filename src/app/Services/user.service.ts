import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  private _url: string = 'http://localhost:8000/api';
  constructor(
    private http: HttpClient,
    
  ) { }

 
    

}
