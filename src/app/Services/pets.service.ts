import {Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pets } from '../Services/pet.schema';


@Injectable ({
    providedIn: 'root'
})
export class PetsService {

    private _url: string = 'http://localhost:8000/api';

    constructor(private http: HttpClient) {}

    getPets(allpets: {user_id}): Observable<Pets[]> {
        return this.http.post<Pets[]>(`${this._url}/allpets`, allpets);
    }

    addPets( pets: {user_id,name, type, breed, gender, age}): Observable<Pets> {
        return this.http.post<Pets>(`${this._url}/pets`, pets);
    }

    updatePets(petsId: number, pet: Pets): Observable<Pets> {
        return this.http.put<Pets>(`${this._url}/pets/${petsId}`, pet);
    }

    deletePets(petsId: number): Observable<Pets>{
        return this.http.delete<Pets>(`${this._url}/pets/${petsId}`);
    }

   
}