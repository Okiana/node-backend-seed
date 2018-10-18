import * as config from 'config';
import { Application } from 'express';

import { valuesController } from './controllers/values/values.controller';
import { ServiceServer } from './server';

const serverPort = config.get<number>('server.port');
const baseApiRoute = config.get<string>('server.baseApiRoute');

const loadRoutes = (app: Application): void => {
    app.use(`${baseApiRoute}/values`, valuesController.getRouter());
    // TODO: Add more routes here.
};

export const serviceServer = new ServiceServer()
    .router(loadRoutes)
    .listen(serverPort);
