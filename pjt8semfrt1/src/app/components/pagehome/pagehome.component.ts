import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagehome',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pagehome.component.html',
  styleUrl: './pagehome.component.scss'
})
export class PagehomeComponent {
  router = inject(Router); 
  title = 'pjt8semfrt1';
  searchTerm: string = '';

  cars = [
    { name: 'Sedan Luxo', price: 'R$ 120.000', image: 'mustang.jpg' },
    { name: 'SUV Confort', price: 'R$ 150.000', image: 'poche1.jpg' },
    { name: 'Esportivo Turbo', price: 'R$ 250.000', image: 'pohe2.jpg' },
  ];

  carsshow = [

    { name: 'Sedan Luxo', price: 'R$ 120.000', image: 'bmw.jpg' },
    { name: 'Esportivo Clássico', price: 'R$ 150.000', image: 'ferrari.jpg' },
    { name: 'Esportivo Turbo', price: 'R$ 250.000', image: 'ferrariama.jpg' },
    { name: 'Sedan Médio', price: 'R$ 120.000', image: 'pLIO.jpg' },
    { name: 'Esportivos', price: 'R$ 150.000', image: 'lojacar.jpg' },
    
];

  get filteredCars() {
    return this.cars.filter(car =>
      car.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }


  get filteredCarsshow() {
    return this.cars.filter(car =>
      car.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  login(){
  this.router.navigate(['/login']); 
      
  }










/////////////////////////////fim class
}
