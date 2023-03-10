import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';
import AppReceitasProvider from '../context/AppReceitasProvider';
import AppRecipesProvider from '../context/AppRecipesProvider';

describe('Testa as funcionalidades do Profile', () => {
  beforeEach(() => {
    localStorage.setItem('user', JSON.stringify({
      email: 'wimucugyt@mailinator.com',
    }));
  });

  it('Testa se o título e inputs estão na tela', () => {
    const { history } = renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );

    act(() => {
      history.push('/profile');
    });

    const doneBTN = screen.getByRole('button', { name: /done recipes/i });
    const favoriteBTN = screen.getByRole('button', { name: /favorite recipes/i });
    const getByRole = screen.getByRole('button', { name: /logout/i });
    // const email = screen.findByText

    expect(doneBTN && favoriteBTN && getByRole).toBeInTheDocument();
  });

  it('Deve ir para Done Recipes depois de clicar', () => {
    const { history } = renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );
    act(() => {
      history.push('/profile');
    });

    act(() => {
      userEvent.click(screen.getByRole('button', { name: /done recipes/i }));
    });

    const { pathname: pathname2 } = history.location;
    expect(pathname2).toBe('/done-recipes');
  });

  it('Deve ir para Favorite Recipes depois de clicar', () => {
    const { history } = renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );
    act(() => {
      history.push('/profile');
    });

    act(() => {
      userEvent.click(screen.getByRole('button', { name: /favorite recipes/i }));
    });

    const { pathname: pathname2 } = history.location;
    expect(pathname2).toBe('/favorite-recipes');
  });

  it('Deve ir para / depois de clicar', () => {
    const { history } = renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );
    act(() => {
      history.push('/profile');
    });

    act(() => {
      userEvent.click(screen.getByRole('button', { name: /logout/i }));
    });

    const { pathname: pathname2 } = history.location;
    expect(pathname2).toBe('/');
  });
});
