import { applicationLogger } from '../../common/logging/logger';
import { IValue } from '../../models/values/values.model';

let seedId = 0;

// Note: Dummy values for examples
const examples: IValue[] = [
    { id: (seedId), name: 'example 0' },
    { id: (seedId + 1), name: 'example 1' },
];

seedId += 2;

export class ValuesService {
    public async getAll(): Promise<IValue[]> {
        applicationLogger.info(examples, 'fetch all values');
        return Promise.resolve(examples);
    }

    public async getById(id: number): Promise<IValue | undefined> {
        applicationLogger.info(`fetch values with id ${id}`);
        return examples.find((item) => item.id === id);
    }

    public async create(name: string): Promise<IValue> {
        applicationLogger.info(`create values with name ${name}`);
        const example: IValue = {
            id: seedId,
            name,
        };

        seedId++;
        examples.push(example);
        return Promise.resolve(example);
    }
}

export const valuesService = new ValuesService();
