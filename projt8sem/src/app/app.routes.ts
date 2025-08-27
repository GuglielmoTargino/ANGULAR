import { Routes } from '@angular/router';
import { CarrolistComponent } from './componente/carrolist/carrolist.component';
import { CarrodetalheComponent } from './componente/carrodetalhe/carrodetalhe.component';

export const routes: Routes = [

    {path: "carro", component: CarrolistComponent},
    {path: "detalhe", component: CarrodetalheComponent}
];
