import { ConfigType, registerAs } from '@nestjs/config';
import path from 'path';
import type { DataSourceOptions } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

export const databaseConfig = registerAs('database', () => ({
  url: process.env.DB_URL,
}));

export type DatabaseConfigType = ConfigType<typeof databaseConfig>;

export const makeConnectionConfig = (
  config: DatabaseConfigType,
): DataSourceOptions => {
  return {
    type: 'postgres',
    url: config.url,
    entities: [path.join(__dirname, '..', '**', '*.{model,entity}.{ts,js}')],
    migrations: [path.join(__dirname, 'migrations/*.{j,t}s')],
    namingStrategy: new SnakeNamingStrategy(),
  };
};
