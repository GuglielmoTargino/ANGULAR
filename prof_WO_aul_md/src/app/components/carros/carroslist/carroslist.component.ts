import { Component, inject } from '@angular/core';
import { Carro } from '../../../models/carro';
import { RouterLink } from '@angular/router';
import { CarroService } from '../../../services/carro.service';

@Component({
  selector: 'app-carroslist',
  imports: [RouterLink],
  templateUrl: './carroslist.component.html',
  styleUrl: './carroslist.component.css'
})

export class CarroslistComponent {
  lista: Carro[]=[];
  carroService = inject(CarroService);


  constructor(){
    this.lista.push(new Carro(1,'Brava'));
    this.lista.push(new Carro(2,'Marea'));
    this.lista.push(new Carro(3,'Linea'));
  }




 
  deletar(){
    //
  }
}
