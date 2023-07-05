import { sign, verify, decode } from 'jsonwebtoken';
import {config} from "../config"
const {jwt:{expiresIn,jwtSecret,cookieExpire}} = config

const verifyToken = async (token:any) => {
  const decoded = await verify(token, String(jwtSecret));
  return decoded;
};

const decodeToken = (token:any) => {
  const decodedToken = decode(token);
  return decodedToken;
};

const signToken = (id:any) => {
  const token = sign({ id }, String(jwtSecret), {
    expiresIn,
    issuer: 'NodeJS',
  });

  return token;
};

const getCookieOptions = (req:any) => {
  const options = {
    secure:
      !config.isDevelopment ||
      req?.secure ||
      req?.headers['x-forwarded-proto'] === 'https',
    httpOnly: true,
    maxAge: Date.now() + cookieExpire * 24 * 60 * 60 * 1000,
  };
  return options;
};

export default{
  verifyToken,
  decodeToken,
  signToken,
  getCookieOptions,
};
