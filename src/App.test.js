import { render, screen } from '@testing-library/react';
import App_78 from './App_78';

test('renders learn react link', () => {
  render(<App_78 />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
