import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';
import AppReceitasProvider from '../context/AppReceitasProvider';
import AppRecipesProvider from '../context/AppRecipesProvider';

const drinkIcon = 'drinks-bottom-btn';
const mealsIcon = 'meals-bottom-btn';

describe('testa as funcionalidades do footer', () => {
  it('verifica se o footer é renderizado corretamente nas paginas: meals, drinks e profile', () => {
    const { history } = renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );
    act(() => {
      history.push('/meals');
    });
    const drinkIcon1 = screen.getByTestId(drinkIcon);
    expect(drinkIcon1).toBeInTheDocument();
    const mealsIcon1 = screen.getByTestId(mealsIcon);
    expect(mealsIcon1).toBeInTheDocument();
    act(() => {
      history.push('/drinks');
    });
    const { pathname: pathname2 } = history.location;
    expect(pathname2).toBe('/drinks');
    const drinkIcon2 = screen.getByTestId(drinkIcon);
    expect(drinkIcon2).toBeInTheDocument();
    const mealsIcon2 = screen.getByTestId(mealsIcon);
    expect(mealsIcon2).toBeInTheDocument();
    act(() => {
      history.push('/profile');
    });
    const { pathname: pathname3 } = history.location;
    expect(pathname3).toBe('/profile');
    const drinkIcon3 = screen.getByTestId(drinkIcon);
    expect(drinkIcon3).toBeInTheDocument();
    const mealsIcon3 = screen.getByTestId(mealsIcon);
    expect(mealsIcon3).toBeInTheDocument();
  });

  it('verifica se ao clicar no icone de drinks(/drinks) é redirecionado para a pagina de drinks', () => {
    const { history } = renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );
    act(() => {
      history.push('/meals');
    });
    const drinkIcon1 = screen.getByTestId(drinkIcon);
    expect(drinkIcon1).toBeInTheDocument();
    act(() => {
      drinkIcon1.click();
    });
    const { pathname: pathname2 } = history.location;
    expect(pathname2).toBe('/drinks');
  });

  it('verifica se ao clicar no icone de meals(/meals) é redirecionado para a pagina de meals', () => {
    const { history } = renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );
    act(() => {
      history.push('/drinks');
    });
    const mealsIcon1 = screen.getByTestId(mealsIcon);
    expect(mealsIcon1).toBeInTheDocument();
    act(() => {
      mealsIcon1.click();
    });
    const { pathname: pathname2 } = history.location;
    expect(pathname2).toBe('/meals');
  });
});
