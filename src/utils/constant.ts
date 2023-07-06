import dotenv from 'dotenv';
import path from 'path';

import {
  NodeEnv,
  toNumber,
  getOsEnv,
  normalizePort,
} from '../shared/utils';

dotenv.config({ path: `.env.${getOsEnv('NODE_ENV')}` });
const dbConfig = {
  development: {
    host :'localhost',
    user_name : process.env.USER_NAME!,
    password : process.env.PASSWORD!,
    database : process.env.DATABASE!,
    port : process.env.PORT!, 
  },
  production: {
    host :process.env.PROD_HOST!,
    user_name : process.env.PROD_USER_NAME!,
    password : process.env.PROD_PASSWORD!,
    database : process.env.PROD_DATABASE!,
    port : process.env.PROD_PORT,
 
  }
}

let env: 'development' | 'production' = process.env.NODE_ENV=='development' ? 'development' : 'production'

export const dbConfigration = dbConfig[env];
