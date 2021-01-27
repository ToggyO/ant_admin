import fs from 'fs';
import path from 'path';

import dotenv from 'dotenv';

export const env = (() => {
  const { NODE_ENV = 'development' } = process.env;
  const dotenvDir = path.join(__dirname, `../.env.${NODE_ENV}`);
  const envVars = dotenv.parse(fs.readFileSync(dotenvDir));

  return {
    ...envVars,
  };
})();
