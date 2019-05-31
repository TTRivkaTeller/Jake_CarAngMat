import { User } from './User';
import { Car } from './Car';

export class Rental {
  RentalId: number;
  StartDate: Date;
  DueBackDate: Date;
  ReturnedDate: Date;
  UserId: User;
  CarId: Car;
}
