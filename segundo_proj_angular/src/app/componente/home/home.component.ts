import { Component, inject, Input } from '@angular/core';
import { FormularioService } from '../../services/formulario.service';

@Component({
  selector: 'app-home23',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    @Input() palavraextrena!: string;
    nome="guga56";
    id=55;
    private form=inject(FormularioService);

    exibe(event: any){  

      console.log("Clicou!!!");

    }

   submit(){
    this.form.enviaForm("Formulario Concluido");
   }

}
