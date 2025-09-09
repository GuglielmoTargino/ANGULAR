import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  http = inject(HttpClient);
  api="http://localhost:8082/carro/login";

  constructor() { }

  loging(usuaru: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.api,usuaru);
  }















}
