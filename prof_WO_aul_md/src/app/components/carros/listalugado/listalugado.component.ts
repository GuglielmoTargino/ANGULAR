import { Component, inject } from '@angular/core';

import { Carro } from '../../../models/carro';
import { RouterLink } from '@angular/router';
import { CarroService } from '../../../services/carro.service';
import { CarrosdetailComponent } from '../carrosdetail/carrosdetail.component';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-listalugado',
  imports: [],
  templateUrl: './listalugado.component.html',
  styleUrl: './listalugado.component.css'
})
export class ListalugadoComponent {
  lista: Carro[]=[];
  carroservice = inject(CarroService);
  carro: Carro = new Carro(0,'',0,'','');


   devolver(num: number){
    alert("Carro devolvido!"+num)
  }

   constructor(){
    this.atzCarro();
  }

  
  atzCarro(){
      this.carroservice.findallalug().subscribe({
      next: vallue => {// requisição success
        this.lista = vallue;          
      },
      error: erro => {// requisição fail
        alert("Falha de resposta de dados"+erro);          
      },
    })
  }

    /*
  deletar(num: number){
    this.carroservice.delete(num).subscribe({    
      next: vallue => {// requisição success
         alert("Carro deletado"); 
         this.atzCarro();           
      },
      error: erro => {// requisição fail
        alert("Falha de resposta de dados"+erro);          
      },
    })    
  }

 */



}
