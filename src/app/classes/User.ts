export class User {
  UserId: number;
  FullName: string;
  PassportNo: number;
  UserName: string;
  BirthDate: Date;
  Gender: Gender;
  Email: string;
  Password: string;
  Picture: string;
}

enum Gender{
  male,
  Female,
  Both,
  Neither,
  Undecided
}
