import fs from 'fs';
import path from 'path';

import dotenv from 'dotenv';

export const env = (() => {
  const dotenvDir = path.join(__dirname, `../.env.${process.env.NODE_ENV}`);
  const envVars = dotenv.parse(fs.readFileSync(dotenvDir));

  return {
    ...envVars,
  };
})();
