import { ConfigService } from '@nestjs/config';
import { MongooseModuleFactoryOptions } from '@nestjs/mongoose';

export const getMongoConfig = async (
  configService: ConfigService
): Promise<MongooseModuleFactoryOptions> => ({
  uri: getMongoString(configService),
});

const getMongoString = (configService: ConfigService): string =>
  `mongodb://${configService.get('DATABASE_USER')}:${configService.get(
    'DATABASE_PASSWORD'
  )}@${configService.get('DATABASE_HOST')}:${configService.get(
    'DATABASE_PORT'
  )}/${configService.get('DATABASE_AUTH')}`;

const getMongoOptions = () => ({
  useCreateIndex: true,
});
