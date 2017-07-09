import { join } from 'path';
import { readFileSync } from 'fs';


const env = process.env.NODE_ENV || 'development';

export const config: {
  port: number,
  db: any
} = JSON.parse(readFileSync(join(__dirname, `../../config/config.${env}.json`), 'utf-8'));