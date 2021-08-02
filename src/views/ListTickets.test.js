import { render, screen } from "@testing-library/react";
import ListTickets from './ListTickets';

test('displays home page', async () => {
    render(<ListTickets/>)

    const homeHeader = await screen.findAllByRole('heading');
    expect(homeHeader).toHaveLength(1);

    const listAllTickets = await screen.findAllByRole('list');
    expect(listAllTickets).toHaveLength(25);
});