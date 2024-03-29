import { render, screen } from '@testing-library/react';
import { Router } from 'react-router';
import history from 'core/utils/history';
import Login from '../Auth/Login';

test('should render Home screen with login form', () => {
  render(
    <Router history={ history }>
      <Login />
    </Router>
  );

  const emailInput = screen.getByTestId('email')
  const passwordInput = screen.getByTestId('password')
  const butttonTitle = screen.getByText('Fazer Login')

  expect(emailInput).toBeInTheDocument()
  expect(passwordInput).toBeInTheDocument()
  expect(butttonTitle).toBeInTheDocument()
});