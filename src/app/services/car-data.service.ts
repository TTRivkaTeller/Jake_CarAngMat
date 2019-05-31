import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Observable } from 'rxjs';
import { Car } from '../Classes/Car';
import { HttpClient } from '@angular/common/http';
import { CarType } from '../Classes/CarType';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarDataService {

  constructor(private client: HttpClient) { }

  getCarTypes(): Observable<CarType[]> {
    return this.client.get<CarType[]>("http://localhost:55523/api/CarInfo/GetCarTypes")
      .pipe(tap(data => console.log(JSON.stringify(data))),
        //errors
      );
  }

  getCars(): Observable<Car[]> {
    return this.client.get<Car[]>("http://localhost:55523/api/CarInfo/GetCars")
      .pipe(tap(data => console.log(JSON.stringify(data)))
    //errors    tap(data => console.log(JSON.stringify(data)))
    );
  }

  private carDelivery = new ReplaySubject<Car>();
  car = this.carDelivery.asObservable();

  private messageDelivery = new BehaviorSubject<string>("Default");
  message = this.messageDelivery.asObservable();

  changeCar(car: any) {
    this.carDelivery.next(car)
  }

  changeMessage(message: string) {
    this.messageDelivery.next(message)
  }


}
