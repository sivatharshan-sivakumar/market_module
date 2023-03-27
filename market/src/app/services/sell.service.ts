import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellService {

  apiUrl='http://localhost:8000/api/addsell';


  constructor(private http:HttpClient) { }

  addsell(veg_name: string,username: string,description: string,price: string,negotiable: string){
    const data = {
      veg_name: veg_name,
      username: username,
      description: description,
      price: price,
      negotiable: negotiable
    }

    return this.http.post(this.apiUrl,data);
  }
}
