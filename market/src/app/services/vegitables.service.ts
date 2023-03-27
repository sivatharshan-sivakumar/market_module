import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vegitable } from '../interfaces.model';

@Injectable({
  providedIn: 'root'
})
export class VegitablesService {

  apiUrl='http://localhost:8000/api/';

  constructor(

    private http: HttpClient

  ) { }

  getvegitables(): Observable<Vegitable[]>{

    return this.http.get<Vegitable[]>(this.apiUrl+'getvegitables');

  }
}
