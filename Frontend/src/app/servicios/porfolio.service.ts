import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
 


@Injectable({
  providedIn: 'root'
})
export class PorfolioService {
  URL = 'http://localhost:8080/personas/';
   
  constructor(private http:HttpClient) { }

  public getPersonas() : Observable<persona> {
    return this.http.get<persona>(this.URL+'traerPerfil');

    

  }

 


}


