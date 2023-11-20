import { IUserRole } from '../auth.interface';

export class AuthDTO {
  name: string;
  surname: string;
  role: IUserRole;
  clubs: Array<string>;
}
