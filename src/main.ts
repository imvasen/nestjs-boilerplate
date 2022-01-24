import { config as dotEnvConfig } from 'dotenv';
dotEnvConfig();

import { NestFactory } from '@nestjs/core';

import { AppModule } from '@/app.module';
import * as config from '@/config';
import { Logger } from '@/common';

async function bootstrap() {
  const logLabel = 'Nest';
  const logger = new Logger(logLabel);
  const app = await NestFactory.create(AppModule, { logger });
  await app.setGlobalPrefix('api');
  await app.listen(config.PORT);
}

bootstrap();
