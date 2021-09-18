import { render, screen } from '../../test-utils';
import { Header } from '../Header';

describe('Header', () => {
  it('should display logo and title', () => {
    render(<Header />);

    expect(screen.getByText('Axiona-Tickets')).toBeInTheDocument();
    expect(screen.getByRole('img')).toBeInTheDocument();
  });
});
