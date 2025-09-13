import { inject, Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Carro } from '../models/carro';
import { HttpClient } from '@angular/common/http';





@Injectable({
  providedIn: 'root'
})
export class CarroService {

  http = inject(HttpClient);
  api="http://localhost:8082/carro";

  constructor() { }


   findall(): Observable<Carro[]>{
    return this.http.get<Carro[]>(this.api+"/findall");
  }


  find(id: number): Observable<Carro>{
    return this.http.get<Carro>(this.api+"/find/"+id);
  }


   save(carro: Carro): Observable<string>{
    return this.http.post<string>(this.api+"/save",carro,{responseType:'text' as 'json'});
  }

   atualizar(carro: Carro, id: number): Observable<string>{
    //return this.http.post<string>(this.api+"/atualizar"+id,carro, {responseType:'text' as 'json'});
    return this.http.post<string>(this.api+"/atualizar"+id,carro, {responseType:'text' as 'json'});
  }

 delete(idcarro: number): Observable<string>{
    return this.http.delete<string>(this.api+"/delete/"+idcarro, {responseType:'text' as 'json'});
  }
  

 alugar(carro: Carro, idcarro: number): Observable<string>{
    return this.http.delete<string>(this.api+"/aluga/"+idcarro, {body: carro, responseType:'text' as 'json'});
  }

  // //////////////////////atualiza alugados aqui ////////////////////
   findallalug(): Observable<Carro[]>{
    return this.http.get<Carro[]>(this.api+"/findallalug");
  }

 deletealug(carro: Carro, idcarro: number): Observable<string>{
    return this.http.delete<string>(this.api+"/devolve/"+idcarro,{ body: carro, responseType:'text' as 'json'});
  }

 


}
