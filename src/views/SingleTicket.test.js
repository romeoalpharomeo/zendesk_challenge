import { render, screen } from "@testing-library/react";
import SingleTicket from './SingleTicket';

describe('SingleTicket view', () => {
    test('renders a single ticket if request is successful', async () => {
        render(<SingleTicket />)

        const ticket = await screen.getByTestId('singleTicket')
        const homeButton = screen.getByRole('link').click();
        expect(ticket).not.toBeNull();
    });
})