import { Request, Response } from 'express';
import { mockPartial } from 'sneer';

import { ValuesController } from '../../../src/controllers/values/values.controller';
import { ValuesService } from '../../../src/services/values/values.service';

describe('Values controller', () => {
    let valuesController: ValuesController;
    let valuesService: ValuesService;

    beforeEach(() => {
        valuesService = mockPartial<ValuesService>({
            getAll: jest.fn(async () => Promise.resolve(['testReturnValue'])),
        });

        valuesController = new ValuesController(valuesService);
    });

    it('should return a list of values', async () => {
        const responseMock = mockPartial<Response>({
            json: jest.fn(),
        });
        const requestMock = mockPartial<Request>({});
        await valuesController.getAll(requestMock, responseMock);
        expect(responseMock.json).toHaveBeenCalledWith(['testReturnValue']);
    });
});
