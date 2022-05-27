import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestSrv } from './api.schema';


@Injectable ({
    providedIn: 'root'
})
export class RequestService {

    private _url: string = 'http://localhost:8000/api';

    constructor(private http: HttpClient) {}

    id: any;  
    getRequest(req: {service_id}): Observable<RequestSrv[]> {
        return this.http.post<RequestSrv[]>(`${this._url}/allrequest`, req);
    } //post tapos sa loob ng bracket may service_id

    getAllRequest(req: {}): Observable<RequestSrv[]> {
        return this.http.get<RequestSrv[]>(`${this._url}/showrequest`, req);
    }

    addRequest( req: {fullName, eMail, cpNumber, details, service_id}): Observable<RequestSrv> {
        return this.http.post<RequestSrv>(`${this._url}/request`, req);
    }

    deleteRequest(reqId: number): Observable<RequestSrv>{
        return this.http.delete<RequestSrv>(`${this._url}/request/${reqId}`);
    }

}