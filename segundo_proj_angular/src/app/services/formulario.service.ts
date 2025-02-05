import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {

  constructor() { }

  enviaForm(info: String){

    console.log("Formulario enviado");
  }
}
