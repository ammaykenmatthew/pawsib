import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Services } from './api.schema';


@Injectable ({
    providedIn: 'root'
})
export class ServService {

    private _url: string = 'http://localhost:8000/api';

    constructor(private http: HttpClient) {}

    id:any

    getServices(allserv: {user_id}): Observable<Services[]> {
        return this.http.post<Services[]>(`${this._url}/allservices`, allserv);
    }

    getAllServices(serv: {}): Observable<Services[]> {
        return this.http.get<Services[]>(`${this._url}/showservices`, serv);
    }

    addService( serv: {user_id,fullname, email, cpNumber, role, address}): Observable<Services> {
        return this.http.post<Services>(`${this._url}/services`, serv);
    }

    updateServ(servId: number, service: Services): Observable<Services> {
        return this.http.put<Services>(`${this._url}/services/${servId}`, service);
    }

    deleteServ(servId: number): Observable<Services>{
        return this.http.delete<Services>(`${this._url}/services/${servId}`);
    }
}