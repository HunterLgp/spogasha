import { getConfig } from 'src/configs/index';

export interface DatabaseConfig {
  type: 'mysql';
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  entities: string[];
  logging: boolean;
}

export const masterConfig = {
  ...getConfig().get<DatabaseConfig>('master'),
  name: 'master',
  entities: [__dirname + '/../models/entities/**/*{.ts,.js}'],
  autoLoadEntities: true,
  loading: true,
};
