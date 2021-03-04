import { render, screen } from '@testing-library/react';
import App from './App';

/* test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/App/i);
  expect(linkElement).toBeInTheDocument();
}); */




test('find deployed world ', () => {
  render(<App />);
  const linkElement = screen.getByText(/Deployed/i);
  expect(linkElement).toBeInTheDocument();
});

test('find deployed world ', () => {
  render(<App />);
  const linkElement1 = screen.getByText(/Surge/i);
  expect(linkElement1).toBeInTheDocument();
});

test('test placeholder', () => {
  const renderReesponse = render(<App />);
  const worldElement = renderReesponse.getByPlaceholderText(/Enter your name/i);
  expect(worldElement).toBeInTheDocument();
});
