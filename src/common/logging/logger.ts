import * as config from 'config';
import * as log4js from 'log4js';

const logLevel: string = config.get<string>('server.logLevel');
log4js.configure({
    appenders: {
        file: { type: 'dateFile', filename: './logs/default.log', pattern: '.yyyy-MM-dd-hh', compress: true },
        console: { type: 'console' },
    },
    categories: {
        default: { appenders: ['file', 'console'], level: logLevel },
    },
});

export const applicationLogger: log4js.Logger = log4js.getLogger();
applicationLogger.level = logLevel;
