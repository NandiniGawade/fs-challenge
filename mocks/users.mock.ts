import faker from 'faker';
import { User } from '../shared/types';

export const createFakeUser = (partial: Partial<User> = {}): User => {
  return {
    id: faker.datatype.number(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    ...partial,
  };
};
