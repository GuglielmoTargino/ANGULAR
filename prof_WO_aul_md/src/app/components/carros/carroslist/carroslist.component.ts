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
  carro: Carro=new Carro(0,'',0,'','');



  constructor(){

    this.atzCarro();


   // this.carroService.findall().subscribe({
     // next: vallue => {// requisição success
     //   this.lista = vallue;          
     // },
    //  error: erro => {// requisição fail
     //   alert("Falha de resposta de dados"+erro);          
     // },
   // })
    //this.lista.push(new Carro(1,'Brava',2000,'fiat','hatch'));
    //this.lista.push(new Carro(2,'Marea',2010,'fiat','sedan'));
    //this.lista.push(new Carro(3,'Linea',2018,'fiat','sedan'));

    
  }

  

  atzCarro(){
      this.carroService.findall().subscribe({
      next: vallue => {// requisição success
        this.lista = vallue;          
      },
      error: erro => {// requisição fail
        alert("Falha de resposta de dados"+erro);          
      },
    })
    //this.lista.push(new Carro(1,'Brava',2000,'fiat','hatch'));
    //this.lista.push(new Carro(2,'Marea',2010,'fiat','sedan'));
    //this.lista.push(new Carro(3,'Linea',2018,'fiat','sedan'));


  }


 
  //deletar(carro: Carro){
    
  deletar(num: number){
    this.carroService.delete(num).subscribe({
    
      next: vallue => {// requisição success
         alert("Carro deletado"); 
         this.atzCarro();
    
           
      },
      error: erro => {// requisição fail
        alert("Falha de resposta de dados"+erro);          
      },
    })
    
  }























}//FIM CLASS
