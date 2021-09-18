import { PrismaClient } from '@prisma/client';
import { addDays, subDays } from 'date-fns';
import { TicketStatus } from '../shared/types';
const prisma = new PrismaClient();

async function main() {
  const date = new Date();

  const julianTickets = [
    {
      createdAt: subDays(date, 6),
      dueDate: addDays(date, 5),
      status: TicketStatus.OPEN,
    },
    {
      createdAt: subDays(date, 2),
      dueDate: addDays(date, 5),
      status: TicketStatus.OPEN,
    },
    {
      createdAt: subDays(date, 5),
      dueDate: addDays(date, 9),
      status: TicketStatus.OPEN,
    },
  ];

  const julian = await prisma.user.upsert({
    where: {
      email: 'Julian.Martinez@axiona.com',
    },
    update: {
      tickets: {
        create: julianTickets,
      },
    },
    create: {
      email: 'Julian.Martinez@axiona.com',
      firstName: 'Julian',
      lastName: 'Martinez',
      tickets: {
        create: julianTickets,
      },
    },
  });

  const martinTickets = [
    {
      createdAt: subDays(date, 9),
      dueDate: addDays(date, 3),
      status: TicketStatus.OPEN,
    },
    {
      createdAt: subDays(date, 5),
      dueDate: addDays(date, 1),
      status: TicketStatus.CLOSED,
    },
    {
      createdAt: subDays(date, 77),
      dueDate: subDays(date, 44),
      status: TicketStatus.OPEN,
    },
    {
      createdAt: subDays(date, 5),
      dueDate: subDays(date, 3),
      status: TicketStatus.CLOSED,
    },
  ];
  const martin = await prisma.user.upsert({
    where: {
      email: 'Martin.Holz@axiona.com',
    },
    update: {
      tickets: {
        create: martinTickets,
      },
    },
    create: {
      email: 'Martin.Holz@axiona.com',
      firstName: 'Martin',
      lastName: 'Holz',
      tickets: {
        create: martinTickets,
      },
    },
  });

  const mariaTickets = [
    {
      createdAt: subDays(date, 1),
      dueDate: addDays(date, 2),
      status: TicketStatus.OPEN,
    },
    {
      createdAt: subDays(date, 2),
      dueDate: addDays(date, 3),
      status: TicketStatus.OPEN,
    },
    {
      createdAt: subDays(date, 4),
      dueDate: subDays(date, 12),
      status: TicketStatus.CLOSED,
    },
    {
      createdAt: subDays(date, 10),
      dueDate: subDays(date, 33),
      status: TicketStatus.CLOSED,
    },
    {
      createdAt: subDays(date, 4),
      dueDate: subDays(date, 10),
      status: TicketStatus.OPEN,
    },
  ];
  const maria = await prisma.user.upsert({
    where: {
      email: 'Maria.Diaz@axiona.com',
    },
    update: {
      tickets: {
        create: mariaTickets,
      },
    },
    create: {
      email: 'Maria.Diaz@axiona.com',
      firstName: 'Maria',
      lastName: 'Diaz',
      tickets: {
        create: mariaTickets,
      },
    },
  });

  const marcTickets = [
    {
      createdAt: subDays(date, 4),
      dueDate: addDays(date, 2),
      status: TicketStatus.OPEN,
    },
    {
      createdAt: subDays(date, 8),
      dueDate: addDays(date, 7),
      status: TicketStatus.OPEN,
    },
    {
      createdAt: subDays(date, 11),
      dueDate: addDays(date, 21),
      status: TicketStatus.OPEN,
    },
    {
      createdAt: subDays(date, 16),
      dueDate: subDays(date, 2),
      status: TicketStatus.CLOSED,
    },
  ];
  const marc = await prisma.user.upsert({
    where: {
      email: 'Marc.Ronson@axiona.com',
    },
    update: {
      tickets: {
        create: marcTickets,
      },
    },
    create: {
      email: 'Marc.Ronson@axiona.com',
      firstName: 'Marc',
      lastName: 'Ronson',
      tickets: {
        create: marcTickets,
      },
    },
  });

  const nataliaTickets = [
    {
      createdAt: date,
      dueDate: addDays(date, 9),
      status: TicketStatus.OPEN,
    },
  ];
  const natalia = await prisma.user.upsert({
    where: {
      email: 'Natalia.Santos@axiona.com',
    },
    update: {
      tickets: {
        create: nataliaTickets,
      },
    },
    create: {
      email: 'Natalia.Santos@axiona.com',
      firstName: 'Natalia',
      lastName: 'Santos',
      tickets: {
        create: nataliaTickets,
      },
    },
  });

  const jacobTickets = [
    {
      createdAt: date,
      dueDate: addDays(date, 2),
      status: TicketStatus.OPEN,
    },
    {
      createdAt: date,
      dueDate: addDays(date, 1),
      status: TicketStatus.OPEN,
    },
    {
      createdAt: date,
      dueDate: addDays(date, 8),
      status: TicketStatus.OPEN,
    },
  ];
  const jacob = await prisma.user.upsert({
    where: {
      email: 'Jacob.Ever@axiona.com',
    },
    update: {
      tickets: {
        create: jacobTickets,
      },
    },
    create: {
      email: 'Jacob.Ever@axiona.com',
      firstName: 'Jacob',
      lastName: 'Ever',
      tickets: {
        create: jacobTickets,
      },
    },
  });

  console.log({ julian, martin, maria, marc, natalia, jacob });
}
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
