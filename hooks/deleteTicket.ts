import axios from "axios";
import { Ticket } from "../shared/types";

export const DELETE_TICKET_ENDPOINT = `/api/tickets/`;

const deleteTicketById = async (id: number)  => {
    try {
      const { data } = await axios.delete<{ data: Ticket[] }>(DELETE_TICKET_ENDPOINT + id, {
        method: 'DELETE'
      });
      return data;
    } catch (e) {
      const errorMessage = e.response?.data?.error?.message || e.message;
  
      throw new Error(errorMessage);
    }
}

export function deleteTicket(id: number) {
    return deleteTicketById(id);
}
