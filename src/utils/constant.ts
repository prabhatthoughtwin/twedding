import dotenv from 'dotenv';
import path from 'path';

import {
  NodeEnv,
  toNumber,
  getOsEnv,
  normalizePort,
} from '../shared/utils';

dotenv.config({ path: `.env.${getOsEnv('NODE_ENV')}` });

 const host ='localhost';
 const user_name = process.env.USER_NAME;
 const password = process.env.PASSWORD;
 const database = process.env.DATABASE;

 const port = process.env.PORT;
console.log(process.env.DATABASE);


export {host,user_name,password,database,port};
