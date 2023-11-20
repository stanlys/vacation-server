import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IUserRole } from './auth.interface';
import { HydratedDocument } from 'mongoose';

export type AuthDocument = HydratedDocument<Auth>;

@Schema()
export class Auth {
  @Prop({ required: true })
  uid: string;

  @Prop()
  name: string;

  @Prop()
  surname: string;

  @Prop()
  role: string;

  @Prop([String])
  clubs: Array<string>;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);
