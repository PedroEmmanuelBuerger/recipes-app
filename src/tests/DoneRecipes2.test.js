import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';
import AppReceitasProvider from '../context/AppReceitasProvider';
import AppRecipesProvider from '../context/AppRecipesProvider';

const doneRecipes = '/done-recipes';

describe('Testes da página DoneRecipes', () => {
  beforeEach(() => {
    localStorage.setItem('user', JSON.stringify({
      id: '178319',
      type: 'drink',
      nationality: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      doneDate: '23/06/2020',
      tags: [],
    }));
  });

  it('verifica se na tela de meals é tudo renderizado igualmente', async () => {
    const { history } = renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );

    act(() => {
      history.push(doneRecipes);
    });

    const filterMealBtn = await screen.findByTestId('filter-by-meal-btn');
    expect(filterMealBtn).toBeInTheDocument();
    userEvent.click(filterMealBtn);
    const mealFilter = await screen.findByText(/Spicy Arrabiata Penne/i);
    expect(mealFilter).toBeInTheDocument();
  });

  it('verifica se carrega todos os botões', async () => {
    const { history } = renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );

    act(() => {
      history.push(doneRecipes);
    });

    const filterByAll = await screen.findByTestId('filter-by-all-btn');
    const filterByDrink = await screen.findByTestId('filter-by-drink-btn');
    const shareBtn = await screen.findByTestId('horizontal-share-btn');
    const favoriteBtn = await screen.findByTestId('horizontal-favorite-btn');

    expect(filterByAll && filterByDrink && shareBtn && favoriteBtn).toBeInTheDocument();
  });

  it('Testando se é renderizado somentes os drinks quando o botão de drinks é clickado', async () => {
    const { history } = renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );

    act(() => {
      history.push(doneRecipes);
    });
    const drinkButton = await screen.findByTestId('filter-by-drink-btn');
    userEvent.click(drinkButton);

    const recipe2 = await screen.findByText('Aquamarine');
    expect(recipe2).toBeInTheDocument();
  });

  it('Testa se é renderizado apenas as comidas quando o botão "Meals" é clickado', async () => {
    const { history } = renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );

    act(() => {
      history.push(doneRecipes);
    });

    const mealButton = await screen.findByTestId('filter-by-meal-btn');
    userEvent.click(mealButton);

    const recipe2 = screen.queryByText('Aquamarine');
    expect(recipe2).not.toBeInTheDocument();
  });
  it('Testa se a mensagem é exibida no click do botão', async () => {
    const { history } = renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );

    act(() => {
      history.push(doneRecipes);
    });

    const mensagemBotão = await screen.findByRole('button', { name: 'Compartilhar' });
    userEvent.click(mensagemBotão);

    expect(screen.findByText('Link copied!')).toBeDefined();
  });
});
