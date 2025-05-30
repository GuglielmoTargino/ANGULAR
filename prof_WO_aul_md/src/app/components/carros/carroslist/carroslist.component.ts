import { Component, inject } from '@angular/core';
import { Carro } from '../../../models/carro';
import { RouterLink } from '@angular/router';
import { CarroService } from '../../../services/carro.service';
import { CarrosdetailComponent } from '../carrosdetail/carrosdetail.component';

@Component({
  selector: 'app-carroslist',
  imports: [RouterLink,CarrosdetailComponent],
  templateUrl: './carroslist.component.html',
  styleUrl: './carroslist.component.css'
})

export class CarroslistComponent {
  lista: Carro[]=[];
  carroService = inject(CarroService);
  carro_send: Carro=new Carro(0,'',0,'','');


  constructor(){
    this.lista.push(new Carro(1,'Brava',2000,'fiat','hatch'));
    this.lista.push(new Carro(2,'Marea',2010,'fiat','sedan'));
    this.lista.push(new Carro(3,'Linea',2018,'fiat','sedan'));
  }




 
  deletar(){
    //
  }























}//FIM CLASS
