import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
;

@Component({
  selector: 'app-login',
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usu!:string;
  sen!:string;

  router =inject(Router);

  logar(){
    if(this.usu=='admin' && this.sen=='admin'){
      this.router.navigate(['admin/carros']);
    }else
    alert("Senha ou usuário errado");
  }

}
