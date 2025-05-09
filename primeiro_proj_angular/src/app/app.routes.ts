import { Routes } from '@angular/router';
import { CasalisteComponent } from './componentes/casaliste/casaliste.component';
import { RualisteComponent } from './componentes/rualiste/rualiste.component';

export const routes: Routes = [
    {path:"casa", component: CasalisteComponent},
    {path: "rua", component: RualisteComponent}

];
