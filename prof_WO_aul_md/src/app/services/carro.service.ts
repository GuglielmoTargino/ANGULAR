import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carro } from '../models/carro';

@Injectable({
  providedIn: 'root'
})
export class CarroService {

  http = inject(HttpClient);
  api="http://localhost:8082/carro";

  constructor() { }

  find(id: number): Observable<Carro>{
    return this.http.get<Carro>(this.api+"/find/{id}"+id);

  }
}
