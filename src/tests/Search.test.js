import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';
import AppReceitasProvider from '../context/AppReceitasProvider';
import AppRecipesProvider from '../context/AppRecipesProvider';

const searchTopBTN = 'search-top-btn';
const execSearchBTN = 'exec-search-btn';
const searchInputID = 'search-input';

describe('Testa as funcionalidades do SearchBar', () => {
  it('Testa se o título e inputs estão na tela', () => {
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

    const avatarBTN = screen.getByRole('button', { name: /avatar/i });
    const lupaBTN = screen.getByTestId(searchTopBTN);

    const heading = screen.getByRole('heading', { name: /meals/i });
    const ingredient = screen.getByRole('radio', { name: /ingredient/i });
    const name = screen.getByRole('radio', { name: /name/i });

    const firstLetter = screen.getByRole('radio', { name: /first letter/i });
    const button = screen.getByTestId(execSearchBTN);

    expect(avatarBTN && lupaBTN && heading && ingredient && name && firstLetter && button)
      .toBeInTheDocument();
  });

  it('Testa a funcionalidade do radio button Ingredient', () => {
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

    const ingredient = screen.getByRole('radio', { name: /ingredient/i });
    const button = screen.getByTestId(execSearchBTN);
    const lupaBTN = screen.getByTestId(searchTopBTN);

    act(() => {
      userEvent.click(lupaBTN);
    });

    const searchInput = screen.getByTestId(searchInputID);
    expect(searchInput).toBeInTheDocument();
    userEvent.type(searchInput, 'milk');
    userEvent.click(ingredient);
    userEvent.click(button);
  });

  it('Testa a funcionalidade do radio button Name', () => {
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

    const name = screen.getByRole('radio', { name: /name/i });
    const button = screen.getByTestId(execSearchBTN);
    const lupaBTN = screen.getByTestId(searchTopBTN);

    act(() => {
      userEvent.click(lupaBTN);
    });

    const searchInput = screen.getByTestId(searchInputID);
    expect(searchInput).toBeInTheDocument();
    userEvent.type(searchInput, 'Rock Cakes');
    userEvent.click(name);
    userEvent.click(button);
  });

  it('Testa a funcionalidade do radio button First letter', () => {
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

    const firstLetter = screen.getByRole('radio', { name: /first letter/i });
    // const button = screen.getByTestId(execSearchBTN);
    const lupaBTN = screen.getByTestId(searchTopBTN);

    act(() => {
      userEvent.click(lupaBTN);
    });

    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
    userEvent.click(firstLetter);
    userEvent.type(searchInput, 'aa');
    const alert = screen.findByText('Your search must have only 1 (one) character');
    expect(alert).toBeDefined();
  });
});
