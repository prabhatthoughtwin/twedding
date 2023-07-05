const NodeEnv = {
  DEVELOPMENT: 'development',
  PRODUCTION: 'production',
};

const isNull = (val:any) => val === null;

const isUndefined = (obj:any) => typeof obj === 'undefined';

const isNil = (val:any) => val === '';

const isEmpty = (val:any) => isUndefined(val) || isNull(val) || isNil(val);

const isBoolean = (obj:any) => typeof obj === 'boolean';

const getOsEnv = (key:any) => {
  const { env } = process;

  if (isEmpty(env[key])) {
    throw new Error(`[ENV] ${key} is not set.`);
  }
  return env[key];
};

const getOsEnvOptional = (key:any) => process.env[key];

const toNumber = (val:any) => Number.parseInt(val, 10);

const toInteger = (val:any) => {
  if (Number.isNaN(Number.parseInt(val, 10))) {
    return 0;
  }
  return Number.parseInt(val, 10);
};

const toBool = (val:any) => {
  if (val === true || val === 'true') {
    return true;
  }
  if (val === false || val === 'false') {
    return false;
  }
  throw new Error('Parse failed (boolean string is expected)');
};

const isValidInt = (val:any) => toInteger(val) !== 0;

const normalizePort = (port:any) => {
  const parsedPort = toNumber(port);
  if (Number.isNaN(parsedPort)) {
    return port;
  }
  if (parsedPort >= 0) {
    return parsedPort;
  }
  return false;
};

const isObject = (fn:any) => !isEmpty(fn) && typeof fn === 'object';

const isFunction = (val:any) => typeof val === 'function';

const isString = (val:any) => typeof val === 'string';

const isNumber = (val:any) => typeof val === 'number';

const isConstructor = (val:any) => val === 'constructor';

export {
  NodeEnv,
  getOsEnv,
  getOsEnvOptional,
  isConstructor,
  isEmpty,
  isFunction,
  isNil,
  isNull,
  isNumber,
  isBoolean,
  isObject,
  isString,
  isUndefined,
  toInteger,
  isValidInt,
  toBool,
  toNumber,
  normalizePort,
};
