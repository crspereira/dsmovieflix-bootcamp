import { render, screen } from '@testing-library/react'
import { Router } from 'react-router'
import Home from '..'
import history from 'core/utils/history'
import Auth from '../Auth';

test('should render Home screen with login form', () => {
  render(
    <Router history={ history }>
      <Home />
    </Router>
  );

  const homeTitle = screen.getByText('Avalie Filmes');
  const subtitle = screen.getByText('Diga o que você achou do seu filme favorito');
  const mainImage = screen.getByTestId('main-image');
  const formTitle = screen.getByText('LOGIN');
  const auth = screen.getByTestId('auth');
  const buttonTitle = screen.getByText('Fazer Login');
  
  expect(homeTitle).toBeInTheDocument();
  expect(subtitle).toBeInTheDocument();
  expect(mainImage).toBeInTheDocument();
  expect(formTitle).toBeInTheDocument();
  expect(auth).toBeInTheDocument();
  expect(buttonTitle).toBeInTheDocument();
});