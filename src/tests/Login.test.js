import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';
import AppReceitasProvider from '../context/AppReceitasProvider';
import AppRecipesProvider from '../context/AppRecipesProvider';

const emailinputstring = 'email-input';
const passwordinputstring = 'password-input';
const loginbuttonstring = 'login-submit-btn';

describe('testa as funcionalidades de login', () => {
  it('verifica se tudo é renderizado', () => {
    renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );
    const emailInput = screen.getByTestId(emailinputstring);
    const passwordInput = screen.getByTestId(passwordinputstring);
    const loginButton = screen.getByTestId(loginbuttonstring);
    expect(emailInput && passwordInput && loginButton).toBeInTheDocument();
  });
  it('verifica se o botão habilita caso o email e senha sejam preenchido', () => {
    renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );
    const emailInput = screen.getByTestId(emailinputstring);
    const passwordInput = screen.getByTestId(passwordinputstring);
    const loginButton = screen.getByTestId(loginbuttonstring);
    expect(loginButton).toBeDisabled();
    userEvent.type(emailInput, 'sombraios@hotmail.com');
    userEvent.type(passwordInput, '1234567');
    expect(loginButton).toBeEnabled();
  });
  it('verifica se ao clicar no botão é redirecionado para a tela de comidas', () => {
    const { history } = renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );
    const emailInput = screen.getByTestId(emailinputstring);
    const passwordInput = screen.getByTestId(passwordinputstring);
    const loginButton = screen.getByTestId(loginbuttonstring);
    userEvent.type(emailInput, 'sombraios@hotmail.com');
    userEvent.type(passwordInput, '1234567');
    userEvent.click(loginButton);
    const { pathname } = history.location;
    expect(pathname).toBe('/meals');
  });
});
