import { Routes } from '@angular/router';

import { LoginComponent } from './components/layout/login/login.component';
import { PrincipalComponent } from './components/layout/principal/principal.component';
import { CarroslistComponent } from './components/carros/carroslist/carroslist.component';
import { CarrosdetailComponent } from './components/carros/carrosdetail/carrosdetail.component';
import { ListalugadoComponent } from './components/carros/listalugado/listalugado.component';
import { PagehomeComponent } from './components/pagehome/pagehome.component';

export const routes: Routes = [

    {path:"", redirectTo:"home", pathMatch: 'full'},
    {path:"login", component:LoginComponent},
    {path:"home", component:PagehomeComponent},  
    
    {path:"admin", component:PrincipalComponent,
        children:[
            {path:"carros", component:CarroslistComponent},
            {path:"carros/new", component:CarrosdetailComponent},
            {path:"carros/edit/:id", component:CarrosdetailComponent},
            {path:"alugados", component:ListalugadoComponent},  
            ]
    }

];
