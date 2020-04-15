import * as path from 'path';
const serverless = require('serverless-http');
import 'reflect-metadata';
import { Container } from 'typedi';
// import { createConnection, useContainer } from 'typeorm';

import * as debug from 'debug';
import * as Koa from 'koa';

import * as bodyparserMiddleware from 'koa-bodyparser';
import * as loggerMiddleware from 'koa-bunyan-logger';
import * as jsonMiddleware from 'koa-json';
// import * as mount from 'koa-mount';
// import * as serve from 'koa-static';

import errorMiddleware from './middleware/error';
import requestMiddleware from './middleware/request';

import routeMiddleware from './route';

import conf from './conf';

const app = new Koa();
const d = debug('kickstarter:root');
const apidocPath = path.resolve(__dirname + '..' + '/apidoc/');

// Register middleware
app.use(bodyparserMiddleware());
app.use(jsonMiddleware());
app.use(loggerMiddleware());
app.use(requestMiddleware());
app.use(errorMiddleware());

// Registers routes via middleware
app.use(routeMiddleware());
// app.use(mount('/apidoc', serve(__dirname + '/apidoc/')));

d('current environment: %s', conf.get('env'));
d('server started at port: %d', conf.get('port'));

const handler = serverless(app);

module.exports.handler = async (event: any, context: any) => {
  // can do bunch of things here
  const result = await handler(event, context);

  // can do bunch of things here
  return result;
}

// useContainer(Container);
// using config from ormconfig.js
// createConnection().then(() => {
//   // tslint:disabled-next-line
//   console.log('db connection established');
  // app.listen(conf.get('port'));
// }).catch((e: Error) => {
//   // tslint:disabled-next-line
//   console.log('db connection failed', e);
//   process.exit(0);
// });


