import { config as dotEnvConfig } from 'dotenv';
dotEnvConfig();

import { NestFactory } from '@nestjs/core';

import { AppModule } from '@/app.module';
import * as config from '@/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.setGlobalPrefix('api');
  await app.listen(config.PORT);
}

bootstrap();
