import { render, screen } from "@testing-library/react";
import SingleTicket from './SingleTicket';

test('displays information for individual ticket', async () => {
    render(<SingleTicket/>);

    const individualTicket = await screen.findAllByRole('heading');
    expect(individualTicket).toHaveLength(2);
});