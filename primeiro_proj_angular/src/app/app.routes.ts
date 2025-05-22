import { Routes } from '@angular/router';
import { CasalisteComponent } from './componentes/casaliste/casaliste.component';
import { RualisteComponent } from './componentes/rualiste/rualiste.component';
import { PetsComponent } from './componentes/pets/pets.component';
import { Component } from '@angular/core';

export const routes: Routes = [
    {path:"casa", component: CasalisteComponent,
      children:[
        {path: "/rua", component: RualisteComponent},
       {path: "pet", component: PetsComponent}

      ]
    }
      
  

];
