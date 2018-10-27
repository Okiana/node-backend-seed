import * as request from 'supertest';

import { serviceServer } from '../../../src';

describe.skip('Values controller', () => {
    it('should get all examples', async () =>
        request(serviceServer)
            .get('/api/values')
            .expect('Content-Type', /json/)
            .then((response) => {
                expect(response.body.length).toStrictEqual(2);
            }));

    it('should add a new example', async () =>
        request(serviceServer)
            .post('/api/values')
            .send({ name: 'test' })
            .expect('Content-Type', /json/)
            .then((response) => {
                expect(response.body).toHaveProperty('name');
                expect(response.body.name).toStrictEqual('test');
            }));

    it('should get an example by id', async () =>
        request(serviceServer)
            .get('/api/values/2')
            .expect('Content-Type', /json/)
            .then((response) => {
                expect(response.body).toHaveProperty('name');
                expect(response.body.name).toStrictEqual('test');
            }));
});
