import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Password } from '../login/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    apiUrl='http://localhost:8000/api/';
    public username: string = '';

  constructor(

    private http: HttpClient

  ) { }

    getpassword(username: string): Observable<Password[]>{

      return this.http.get<Password[]>(this.apiUrl+'passwordofuser/'+username);

    }

}
