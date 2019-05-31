import { CarType } from './CarType';
import { Branch } from './Branch';

export class Car {
  CarType: CarType;
  Mileage: number;
  PictureUrl: string;
  FitForRental: number;
  Available: number;
  Number: number;
  Branch: Branch;
}
