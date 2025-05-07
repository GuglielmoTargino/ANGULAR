import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import {Carro} from'../../../models/carro';

@Component({
  selector: 'app-carrosdetail',
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './carrosdetail.component.html',
  styleUrl: './carrosdetail.component.css'
})
export class CarrosdetailComponent {
  carro: Carro = new Carro(0,"");


  save(){
    //
  }

}
