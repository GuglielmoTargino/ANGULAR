import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import {Carro} from'../../../models/carro';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-carrosdetail',
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './carrosdetail.component.html',
  styleUrl: './carrosdetail.component.css'
})
export class CarrosdetailComponent {
  carango: Carro = new Carro(0,"");


  save(){
 
    Swal.fire({
      title: 'Success!',
      text: 'Parabéns! Salvo com sucesso.',
      icon: 'success',
      confirmButtonText: 'Parabéns! Salvo com sucesso.'
    })
  }

 

}
