import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const router = screen.getByTestId('router');
  expect(router).not.toBeNull();
});
