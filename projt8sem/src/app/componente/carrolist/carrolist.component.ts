
import { CarrodetalheComponent } from '../carrodetalhe/carrodetalhe.component';
import { Carromodelo } from '../../modelo/carromodelo';

import { Component, inject } from '@angular/core';

import { Carroservico } from '../../servico/carroservico';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-carrolist',
  imports: [CarrodetalheComponent,NgFor, RouterLink],
  templateUrl: './carrolist.component.html', 
  standalone: true,  // caso seja standalone  
  //styleUrls: ['./carrolist.component.css']
})





export class CarrolistComponent {
lista: Carromodelo[] = [];
  carroServico = inject(Carroservico);

  constructor() {
    this.atualizarLista();
  }

  atualizarLista() {
    this.carroServico.findall().subscribe({
      next: (res) => this.lista = res,
      error: (err) => alert('Erro ao buscar carros: ' + err)
    });
  }

}
