
/*


import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../../auth/login.service';
import { Login } from '../../../auth/login';
;

@Component({
  selector: 'app-login',
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 login: Login = new Login();

  router =inject(Router);
  loginService = inject(LoginService);
  constructor(){

  }

  logar(){
    this.router.navigate(['/admin/carros']);
    this.loginService.logar(this.login).subscribe({
     next: token =>{
      console.log(token);

       if (token) {
        this.loginService.addToken(token);
        this.router.navigate(['/admin/carros']);
        
        } else{
        alert('Senha ou senha errada');
        }
     },
      error: erro =>{
        alert('Falha operação Tokrn');
      }

    });
 
  }

}



*/

  


  
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/usuario';
import { UsuarioService } from '../../../services/usuario.service';
//import { LoginService } from '../../../auth/login.service';
;

@Component({
  selector: 'app-login',
  imports: [MdbFormsModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {  
  usuarioServi= inject(UsuarioService);  
  usu!: string;
  sen!: string;
  router = inject(Router); 

login(){
  const usuario: Usuario ={
    id: 0,
    nomeusu: this.usu,
    senha: this.sen

  };
      this.usuarioServi.loging(usuario).subscribe({
      next: vallue => {// requisição success
        if(vallue){
          this.router.navigate(['admin/carros']); 
        }        
      },
      error: erro => {// requisição fail
        alert("Falha de resposta de dados"+erro);          
      },
    })
  }




































logar(){
    if(this.usu == 'admin' && this.sen == 'admin'){
      this.router.navigate(['admin/carros']);
    }else
    alert("Senha ou usuário errado");
  }

  
}

 