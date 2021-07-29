import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ListTickets from './ListTickets';

describe('ListTickets view', () => {
    test('renders tickets if request is successful', async () => {
        render(<ListTickets />);

        const listTicketItems = await screen.getAllByRole('list');
        expect(listTicketItems).not.toHaveLength(0);
    });
});