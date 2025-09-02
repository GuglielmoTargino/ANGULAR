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
            carro.nome="Bravava";
            carro.marca="fiat";           
            carro.modelo="hatch";
            carro.ano=2020;

            let carro2: Carros= new Carros();
            carro2.id=2;
            carro2.nome="Marea";
            carro2.marca="fiat";            
            carro2.modelo="sedan";
            carro2.ano=2020;

            let carro3: Carros= new Carros();
            carro3.id=3;
            carro3.nome="Tempra";
            carro3.marca="fiat";            
            carro3.modelo="sedan";
            carro3.ano=2020;

            this.lista.push(carro2);
            this.lista.push(carro3);
            this.lista.push(carro);
            
        }
    }
