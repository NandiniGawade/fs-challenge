import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case 'DELETE':
      const ticketId = Number(id);
      const found = await prisma.ticket.findUnique({
        where: {
          id: ticketId,
        },
      });

      if (!found) {
        res.status(404).send({ error: { message: 'Not found' } });
      }

      const deleteTicket = await prisma.ticket.delete({
        where: {
          id: ticketId,
        },
      });

      if (!deleteTicket) {
        res.status(400).send({ error: { message: 'Bad request' } });
      }

      res.status(200).send({ data: deleteTicket });
      break;
    default:
      res.setHeader('Allow', ['DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
