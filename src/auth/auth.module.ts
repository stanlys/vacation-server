import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Auth, AuthSchema } from './auth.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Auth.name, schema: AuthSchema }], 'mongo')],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
