import { Component } from '@angular/core';
import { Carros } from '../../models/carros';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-carroslist',
    imports: [CommonModule],
    templateUrl: './carroslist.component.html',
    styleUrl: './carroslist.component.css'})
    export class CarroslistComponent {

        lista: Carros[]=[];

        constructor(){

            let carro: Carros= new Carros();
            carro.id=1;
            carro.marca="fiat";
            carro.nome="Brava";

            let carro2: Carros= new Carros();
            carro2.id=2;
            carro2.marca="fiat";
            carro2.nome="Marea";

            let carro3: Carros= new Carros();
            carro3.id=3;
            carro3.marca="fiat";
            carro3.nome="Tempra";

            this.lista.push(carro);
            this.lista.push(carro2);
            this.lista.push(carro3);
        }
    }
