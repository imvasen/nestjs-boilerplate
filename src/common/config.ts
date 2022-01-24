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
