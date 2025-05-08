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

 

}
