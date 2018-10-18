import * as config from 'config';
import { Application } from 'express';
import * as swaggerUiExpress from 'swagger-ui-express';

import swaggerJsDoc = require('swagger-jsdoc');
const showSwagger = config.get<boolean>('swagger.enabled');
const host = config.get<string>('server.host');
const port = config.get<string>('server.port');
const basePath = config.get<string>('server.baseApiRoute');

export const loadSwagger = (app: Application) => {

    if (!showSwagger) {
        return app;
    }

    const swaggerSpec = swaggerJsDoc({
        swaggerDefinition: {
            info: {
                title: 'Mircoservice seed',
                description: 'Mircoservice seed API',
                version: '1.0.0',
            },
            host: `${host}:${port}`,
            basePath,
            produces: ['application/json'],
        },
        apis: [
            './src/controllers/**/*.yaml',
            './src/models/**/*.yaml',
        ],
    });

    app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerSpec));

    return app;
};
