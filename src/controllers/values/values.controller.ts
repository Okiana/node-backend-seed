import * as config from 'config';
import { Request, Response, Router } from 'express';
import * as asyncHandler from 'express-async-handler';
import * as statusCodes from 'http-status-codes';

import { ValuesService } from '../../services/values/values.service';

const baseApiRoute = config.get<string>('server.baseApiRoute');

export class ValuesController {
    public constructor(private valuesService: ValuesService = new ValuesService()) {
    }

    public async getAll(_: Request, response: Response): Promise<Response> {
        const values = await this.valuesService.getAll();
        return response.json(values);
    }

    public async getById(request: Request, response: Response): Promise<Response> {
        const value = await this.valuesService.getById(parseInt(request.params.id, 10));
        if (value) {
            return response.json(value);
        }

        return response.sendStatus(statusCodes.NOT_FOUND);
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const newValue = await this.valuesService.create(request.body.name);
        return response
            .status(statusCodes.CREATED)
            .location(`${baseApiRoute}/values/${newValue.id}`)
            .json(newValue);
    }

    public getRouter(): Router {
        return Router()
            .get('/', asyncHandler(this.getAll.bind(this)))
            .get('/:id', asyncHandler(this.getById.bind(this)))
            .post('/', asyncHandler(this.create.bind(this)));
    }
}

export const valuesController = new ValuesController();
