import * as bodyParser from 'body-parser';
import * as config from 'config';
import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as http from 'http';
import * as log4js from 'log4js';
import * as os from 'os';

import { applicationLogger } from './common/logging/logger';
import { loadSwagger } from './common/swagger/swagger';

const app = express();
const defaultPort = config.get<number>('server.port');
const sessionSecret = config.get<string>('server.sessionSecret');
const logLevel = config.get<string>('server.logLevel');

export class ServiceServer {
    public constructor() {
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(cookieParser(sessionSecret));
        app.use(log4js.connectLogger(applicationLogger, { level: logLevel }));
        loadSwagger(app);
    }

    public router(routes: (app: express.Application) => void): ServiceServer {
        routes(app);
        return this;
    }

    public listen(port: string | number = defaultPort): express.Application {
        const welcome = (serverPort: string | number) => () => applicationLogger
            .info(`up and running in ${process.env.NODE_ENV || 'development'} @: ${os.hostname()} on port: ${serverPort}`);

        http.createServer(app).listen(port, welcome(port));
        return app;
    }
}
