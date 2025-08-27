import { Component } from '@angular/core';
import { CarrodetalheComponent } from '../carrodetalhe/carrodetalhe.component';
import { Carromodelo } from '../../modelo/carromodelo';


@Component({
  selector: 'app-carrolist',
  imports: [CarrodetalheComponent],
  templateUrl: './carrolist.component.html',
  styleUrl: './carrolist.component.scss'
})
export class CarrolistComponent {
  lista: Carromodelo[] = [];

  



}
