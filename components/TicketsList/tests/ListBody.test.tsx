import { render, screen } from '../../../test-utils';
import { ListBody } from '../ListBody';
import { useTickets } from '../../../hooks/useTickets';
import { createFakeTickets } from '../../../mocks/tickets.mock';

jest.mock('../../../hooks/useTickets');

const tickets = createFakeTickets();

describe('ListBody', () => {
  it('should display loading indicator', () => {
    (useTickets as jest.Mock).mockReturnValue({
      isLoading: true,
      data: undefined,
    });
    render(<ListBody />);

    expect(screen.getByTestId('loading-indicator')).toBeInTheDocument();
  });

  it('should display the list of tickets', () => {
    (useTickets as jest.Mock).mockReturnValue({
      isLoading: false,
      data: tickets,
    });
    render(<ListBody />);

    expect(screen.queryByTestId('loading-indicator')).not.toBeInTheDocument();
    tickets.forEach((ticket) => {
      expect(screen.getByText(`${ticket.user.firstName} ${ticket.user.lastName}`)).toBeInTheDocument();
    });
  });

  it('should display Nothing found when there are no tickets', () => {
    (useTickets as jest.Mock).mockReturnValue({
      isLoading: false,
      data: [],
    });
    render(<ListBody />);

    expect(screen.getByText('Nothing found')).toBeInTheDocument();
  });
});
