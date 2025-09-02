import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import {Carro} from'../../../models/carro';
import Swal from 'sweetalert2';
import { CarroService } from '../../../services/carro.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carrosdetail',
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './carrosdetail.component.html',
  styleUrl: './carrosdetail.component.css'
})



export class CarrosdetailComponent {
  
  @Input("carro") carro: Carro = new Carro(0,"",0,"","");
  @Output("retorno") retorno=new EventEmitter<any>();
  carango: Carro = new Carro(0,"",0,"","");
  router=inject(ActivatedRoute);

  carroservice = inject(CarroService);
  

  constructor(){
    let id =this.router.snapshot.params['id'];
    if(id){
      this.find(id);
    }

  }

  save(xy: Carro){

     this.carroservice.save(xy).subscribe({

      next: retor =>{
        alert(retor);     
      },
      error: erro =>{
        alert("Sem carro ");
      }
      });
 
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }


   find(id: number){
    this.carroservice.find(id).subscribe({
   

      next: retor =>{
        this.carango =retor;     
      },
      error: erro =>{
        alert("Sem carro ");
      }
    });

    /*
    atualizar(xy: Carro, id: number){

     this.carroservice.atualizar(xy, id).subscribe({

      next: retor =>{
        //this.carango =retor;     
      },
      error: erro =>{
        alert("Sem carro ");
      }
      });
 
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: 'No',
      customClass: {
        actions: 'my-actions',
        cancelButton: 'order-1 right-gap',
        confirmButton: 'order-2',
        denyButton: 'order-3',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire('Saved!', '', 'success')
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
      }
    })
  }



*/






















































































  }








































 

}//++++++++++++++++++++++++++++++++++++++FIM CLASS+++++++++++++++++++++++++++++++++++++++++++++++++++++
