import * as redisStore from 'cache-manager-redis-store';
import { CacheModuleOptions } from '@nestjs/common';

export enum LogLevel {
  error = 'error',
  warn = 'warn',
  info = 'info',
  http = 'http',
  verbose = 'verbose',
  debug = 'debug',
}

function getLogLevel(): LogLevel {
  const logLevel = process.env.LOG_LEVEL as LogLevel;
  return Object.values(LogLevel).includes(logLevel) ? logLevel : LogLevel.info;
}

export const LOG_LEVEL = getLogLevel();
export const NODE_ENV = process.env.NODE_ENV ?? 'development';

export const cache: CacheModuleOptions = {
  isGlobal: true,
  ttl: 10 * 60,
  ...(process.env.REDIS_HOST
    ? {
        store: redisStore,
        host: process.env.REDIS_HOST,
        port: Number(process.env.REDIS_PORT),
        auth_pass: process.env.REDIS_PASSWORD,
      }
    : {}),
};
