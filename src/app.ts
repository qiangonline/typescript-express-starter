import { join } from 'path';
import 'reflect-metadata';

import { config } from './core/config';

import * as express from 'express';
import * as compression from 'compression';
import * as bodyParser from 'body-parser';

import { createConnection } from 'typeorm';

import { routes } from './routes';

createConnection({
  ...config.db,
  entities: [join(__dirname, './modules/**/*.entity.{ts,js}')]
}).then(() => {
  const app = express();

  app
    .use(compression())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json());

  routes.forEach(router => app.use(router));

  app.listen(config.port, () => {
    console.log(('App is running at http://localhost:%d'), config.port);
  });
}).catch(error => console.log('TypeORM connection error: ', error));

