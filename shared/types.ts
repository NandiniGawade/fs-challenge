export type User = {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
};

export enum TicketStatus {
  OPEN = 'OPEN',
  CLOSED = 'CLOSED',
}

export type Ticket = {
  id: number;
  createdAt: string;
  updatedAt: string;
  dueDate: string;
  status: TicketStatus;
  userId: number;
  user: User;
};
