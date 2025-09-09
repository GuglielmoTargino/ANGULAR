
import { Component, inject } from '@angular/core';
import { Carro } from '../../../models/carro';
import { RouterLink } from '@angular/router';
import { CarroService } from '../../../services/carro.service';
import { CarrosdetailComponent } from '../carrosdetail/carrosdetail.component';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-carroslist',
  imports: [RouterLink],
  templateUrl: './carroslist.component.html',
  styleUrl: './carroslist.component.css'
})

export class CarroslistComponent {
  
  lista: Carro[]=[];
  carroservice = inject(CarroService);
  carro: Carro = new Carro(0,'',0,'','');

   constructor(){
    this.atzCarro();
  }

  
  atzCarro(){
      this.carroservice.findall().subscribe({
      next: vallue => {// requisição success
        this.lista = vallue;          
      },
      error: erro => {// requisição fail
        alert("Falha de resposta de dados"+erro);          
      },
    })
  }

    
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

  alugar(carro: Carro, num: number){
    this.carroservice.alugar(carro, num).subscribe({    
      next: vallue => {// requisição success
         alert("Carro Alugado"); 
         this.atzCarro();           
      },
      error: erro => {// requisição fail
        alert("Falha de resposta de dados"+erro);          
      },
    })    
  }

 



}//FIM CLASS
