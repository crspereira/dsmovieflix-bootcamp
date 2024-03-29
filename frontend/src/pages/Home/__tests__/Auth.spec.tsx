import { render, screen } from '@testing-library/react';
import { Router } from 'react-router';
import history from 'core/utils/history';
import Auth from '../Auth';

test('should render Home screen with login form', () => {
  render(
    <Router history={ history }>
      <Auth />
    </Router>
  );

  const login = screen.getByTestId('login');

  expect(login).toBeInTheDocument();
});