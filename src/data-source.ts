import 'reflect-metadata';
import { DataSource } from 'typeorm';

import { User } from './users/entity/user';
import { User1691738600799 } from './migration/1691738600799-User';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: process.env.DATABASE_URL,
  synchronize: true,
  logging: false,
  entities: [User],
  migrations: [User1691738600799],
  subscribers: [],
});
