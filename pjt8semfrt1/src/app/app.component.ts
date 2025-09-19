

import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';  // <-- ESSENCIAL
import { CommonModule } from '@angular/common'; // <-- aqui
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule, RouterOutlet],  // <-- aqui você coloca o CommonModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  router = inject(Router); 
  title = 'pjt8semfrt1';
  searchTerm: string = '';

  cars = [
    { name: 'Sedan Luxo', price: 'R$ 120.000', image: 'assets/sedan.jpg' },
    { name: 'SUV Confort', price: 'R$ 150.000', image: 'assets/suv.jpg' },
    { name: 'Esportivo Turbo', price: 'R$ 250.000', image: 'assets/sport.jpg' },
  ];

  get filteredCars() {
    return this.cars.filter(car =>
      car.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

login(){

  this.router.navigate(['/login']); 
  

      
  }


}
