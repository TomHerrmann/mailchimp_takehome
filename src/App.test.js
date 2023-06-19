import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Mailchimp Comment Takehome/i);
  expect(headerElement).toBeInTheDocument();
});
