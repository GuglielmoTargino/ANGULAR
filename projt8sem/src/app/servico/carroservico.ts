import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carromodelo } from '../modelo/carromodelo';


@Injectable({
  providedIn: 'root'
})







export class Carroservico {
    

  http = inject(HttpClient);
  api="http://localhost:8082/carro";

  constructor() { }


   findall(): Observable<Carromodelo[]>{
    return this.http.get<Carromodelo[]>(this.api+"/findall");
  }

}
