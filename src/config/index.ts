import dotenv from 'dotenv';

import {
  NodeEnv,
  toNumber,
  getOsEnv,
  normalizePort,
} from '../shared/utils';

dotenv.config({ path: `.env.${getOsEnv('NODE_ENV')}` });

export const config = {
  env: getOsEnv('NODE_ENV'),
  port: normalizePort(getOsEnv('PORT')),
  isDevelopment: getOsEnv('NODE_ENV') === NodeEnv.DEVELOPMENT,
  baseUrl: '/api/v1',
  jwt: {
    expiresIn: getOsEnv('EXPIRES_IN'),
    jwtSecret: getOsEnv('JWT_SECRET'),
    cookieExpire: toNumber(getOsEnv('COOKIE_EXPIRE')),
  },
  hash: toNumber(getOsEnv('HASH_SALT')),
};

