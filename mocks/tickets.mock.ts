import faker from 'faker';
import { Ticket, TicketStatus } from '../shared/types';
import { createFakeUser } from './users.mock';

export const createFakeTicket = (partial: Partial<Ticket> = {}): Ticket => {
  const user = createFakeUser();

  return {
    id: faker.datatype.number(),
    createdAt: faker.date.recent().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
    dueDate: faker.date.soon().toISOString(),
    status: faker.random.arrayElement(Object.values(TicketStatus)),
    userId: user.id,
    user,
    ...partial,
  };
};

export const createFakeTickets = (count = 3, partial: Partial<Ticket> = {}): Ticket[] => {
  return Array(count)
    .fill(partial)
    .map(() => createFakeTicket(partial));
};
