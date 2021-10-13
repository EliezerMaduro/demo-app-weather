import { render, screen } from '@testing-library/react';
import App from './App';

test('testing app components', () => {
  render(<App />);
  const app = screen.getByTestId('test-app');
  expect(app).toBeInTheDocument();
  expect(app).toContainHTML('<div>')
});
