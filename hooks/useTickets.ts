import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query';
import axios from 'axios';
import { Ticket } from '../shared/types';

export type TicketsResponse = Ticket[];

export const TICKETS_ENDPOINT = `/api/tickets`;

const getTickets = async (): Promise<TicketsResponse> => {
  try {
    const { data } = await axios.get<{ data: Ticket[] }>(TICKETS_ENDPOINT, {
      method: 'GET',
    });
    return data.data;
  } catch (e) {
    const errorMessage = e.response?.data?.error?.message || e.message;

    throw new Error(errorMessage);
  }
};

export const useTickets = (options?: UseQueryOptions<Ticket[]>): UseQueryResult<TicketsResponse> => {
  return useQuery(TICKETS_ENDPOINT, getTickets, options);
};
