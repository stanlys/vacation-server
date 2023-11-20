import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Auth, AuthDocument } from './auth.schema';
import { Model } from 'mongoose';
import { AuthDTO } from './dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(@InjectModel(Auth.name, 'mongo') private authModel: Model<AuthDocument>) {}

  async createUser(createUserDTO: AuthDTO): Promise<Auth> {
    const createUser = new this.authModel(createUserDTO);
    console.log(createUser);
    return createUser.save();
  }
}
