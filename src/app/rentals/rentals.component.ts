import { Component, OnInit } from '@angular/core';
import { CarDataService } from '../services/car-data.service';
import { Car } from '../Classes/Car';

@Component({
  selector: 'app-rentals',
  templateUrl: './rentals.component.html',
  styleUrls: ['./rentals.component.scss']
})
export class RentalsComponent implements OnInit {

  car: Car;

  constructor(private service: CarDataService) { }

  ngOnInit() {
    this.service.car.subscribe(car => this.car = car)
  }

}
