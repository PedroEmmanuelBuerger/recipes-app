import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';
import AppReceitasProvider from '../context/AppReceitasProvider';
import AppRecipesProvider from '../context/AppRecipesProvider';

const card = '0-recipe-card';
const card2 = '1-recipe-card';

describe('teste o componente dos recipes', () => {
  it('verifica se é feito uma requesição a api e verifica se as coisas são renderizadas normalmente tanto na pagina do meals', async () => {
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
    const allCategoriesName = ['Beef', 'Breakfast', 'Chicken', 'Dessert', 'Goat'];
    const beefCategories = await screen.findByText(allCategoriesName[0]);
    expect(beefCategories).toBeInTheDocument();
    const breakfastCategories = await screen.findByText(allCategoriesName[1]);
    expect(breakfastCategories).toBeInTheDocument();
    const chickenCategories = await screen.findByText(allCategoriesName[2]);
    expect(chickenCategories).toBeInTheDocument();
    const dessertCategories = await screen.findByText(allCategoriesName[3]);
    expect(dessertCategories).toBeInTheDocument();
    const goatCategories = await screen.findByText(allCategoriesName[4]);
    expect(goatCategories).toBeInTheDocument();
    const recipeCard0 = await screen.findByTestId(card);
    expect(recipeCard0).toBeInTheDocument();
    const recipeCard1 = await screen.findByTestId(card2);
    expect(recipeCard1).toBeInTheDocument();
    const recipeCard2 = await screen.findByTestId('2-recipe-card');
    expect(recipeCard2).toBeInTheDocument();
    const recipeCard3 = await screen.findByTestId('3-recipe-card');
    expect(recipeCard3).toBeInTheDocument();
    const recipeCard4 = await screen.findByTestId('4-recipe-card');
    expect(recipeCard4).toBeInTheDocument();
    const recipeCard5 = await screen.findByTestId('5-recipe-card');
    expect(recipeCard5).toBeInTheDocument();
    const recipeCard6 = await screen.findByTestId('6-recipe-card');
    expect(recipeCard6).toBeInTheDocument();
    const recipeCard7 = await screen.findByTestId('7-recipe-card');
    expect(recipeCard7).toBeInTheDocument();
    const recipeCard8 = await screen.findByTestId('8-recipe-card');
    expect(recipeCard8).toBeInTheDocument();
    const recipeCard9 = await screen.findByTestId('9-recipe-card');
    expect(recipeCard9).toBeInTheDocument();
    const recipeCard10 = await screen.findByTestId('10-recipe-card');
    expect(recipeCard10).toBeInTheDocument();
    const recipeCard11 = await screen.findByTestId('11-recipe-card');
    expect(recipeCard11).toBeInTheDocument();
  });
  it('verifica se a renderização dos elementos do recipes é feito na pagina do drink', async () => {
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
    const allCategoriesName = ['Ordinary Drink', 'Cocktail', 'Shake', 'Other / Unknown', 'Cocoa'];
    const ordinaryDrinkCategories = await screen.findByText(allCategoriesName[0]);
    expect(ordinaryDrinkCategories).toBeInTheDocument();
    const cocktailCategories = await screen.findByText(allCategoriesName[1]);
    expect(cocktailCategories).toBeInTheDocument();
    const milkCategories = await screen.findByText(allCategoriesName[2]);
    expect(milkCategories).toBeInTheDocument();
    const otherCategories = await screen.findByText(allCategoriesName[3]);
    expect(otherCategories).toBeInTheDocument();
    const cocoaCategories = await screen.findByText(allCategoriesName[4]);
    expect(cocoaCategories).toBeInTheDocument();
    const recipeCard0 = await screen.findByTestId(card);
    expect(recipeCard0).toBeInTheDocument();
    const recipeCard1 = await screen.findByTestId('1-recipe-card');
    expect(recipeCard1).toBeInTheDocument();
    const recipeCard2 = await screen.findByTestId('2-recipe-card');
    expect(recipeCard2).toBeInTheDocument();
    const recipeCard3 = await screen.findByTestId('3-recipe-card');
    expect(recipeCard3).toBeInTheDocument();
    const recipeCard4 = await screen.findByTestId('4-recipe-card');
    expect(recipeCard4).toBeInTheDocument();
    const recipeCard5 = await screen.findByTestId('5-recipe-card');
    expect(recipeCard5).toBeInTheDocument();
    const recipeCard6 = await screen.findByTestId('6-recipe-card');
    expect(recipeCard6).toBeInTheDocument();
    const recipeCard7 = await screen.findByTestId('7-recipe-card');
    expect(recipeCard7).toBeInTheDocument();
    const recipeCard8 = await screen.findByTestId('8-recipe-card');
    expect(recipeCard8).toBeInTheDocument();
    const recipeCard9 = await screen.findByTestId('9-recipe-card');
    expect(recipeCard9).toBeInTheDocument();
    const recipeCard10 = await screen.findByTestId('10-recipe-card');
    expect(recipeCard10).toBeInTheDocument();
    const recipeCard11 = await screen.findByTestId('11-recipe-card');
    expect(recipeCard11).toBeInTheDocument();
  });
  it('testa a funcionalidade dos botoes de categoria', async () => {
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
    const beef = await screen.findByTestId('Beef-category-filter');
    expect(beef).toBeInTheDocument();
    act(() => {
      userEvent.click(beef);
    });
    const recipeCard0 = await screen.findByTestId(card);
    expect(recipeCard0).toBeInTheDocument();
  });
  it('verifica se o botão de de limpar o filtro funciona', async () => {
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
    const beef = await screen.findByTestId('Beef-category-filter');
    expect(beef).toBeInTheDocument();
    act(() => {
      userEvent.click(beef);
    });
    const recipeCard0 = await screen.findByTestId(card);
    expect(recipeCard0).toBeInTheDocument();
    const all = await screen.findByTestId('All-category-filter');
    expect(all).toBeInTheDocument();
    act(() => {
      userEvent.click(all);
    });
    const recipeCard1 = await screen.findByTestId(card2);
    expect(recipeCard1).toBeInTheDocument();
  });
  it('verifica se ao clicar em um card vai para a pagina de detalhes', async () => {
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
    const recipeCard0 = await screen.findByTestId(card);
    expect(recipeCard0).toBeInTheDocument();
    act(() => {
      userEvent.click(recipeCard0);
    });
    const { pathname } = history.location;
    expect(pathname).toBe('/meals/52977');
    act(() => {
      history.push('/drinks');
    });
    const recipeCard1 = await screen.findByTestId(card);
    expect(recipeCard1).toBeInTheDocument();
    act(() => {
      userEvent.click(recipeCard1);
    });
    const { pathname: pathname2 } = history.location;
    expect(pathname2).toBe('/drinks/15997');
  });
  it('verifica se ao clicar duas vezes ele retorna para o filtro original', async () => {
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
    const breakf = await screen.findByTestId('Breakfast-category-filter');
    expect(breakf).toBeInTheDocument();
    act(() => {
      userEvent.click(breakf);
    });
    const recipeCard0 = await screen.findByTestId(card);
    expect(recipeCard0).toBeInTheDocument();
    act(() => {
      userEvent.click(breakf);
    });
    const recipeCard1 = await screen.findByTestId(card2);
    expect(recipeCard1).toBeInTheDocument();
    act(() => {
      userEvent.click(breakf);
    });
  });
  it('verifica se da tudo certo na pagina de drinks', async () => {
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
    const allCategoriesName = ['Ordinary Drink', 'Cocktail', 'Shake', 'Other / Unknown', 'Cocoa'];
    const ordinaryDrinkCategories = await screen.findByText(allCategoriesName[0]);
    expect(ordinaryDrinkCategories).toBeInTheDocument();
    const cocktailCategories = await screen.findByText(allCategoriesName[1]);
    expect(cocktailCategories).toBeInTheDocument();
    const milkCategories = await screen.findByText(allCategoriesName[2]);
    expect(milkCategories).toBeInTheDocument();
    const otherCategories = await screen.findByText(allCategoriesName[3]);
    expect(otherCategories).toBeInTheDocument();
    const cocoaCategories = await screen.findByText(allCategoriesName[4]);
    expect(cocoaCategories).toBeInTheDocument();
    const recipeCard0 = await screen.findByTestId(card);
    expect(recipeCard0).toBeInTheDocument();
    const breakf = await screen.findByTestId('Ordinary Drink-category-filter');
    expect(breakf).toBeInTheDocument();
    act(() => {
      userEvent.click(breakf);
    });
    const recipeCard1 = await screen.findByTestId(card);
    expect(recipeCard1).toBeInTheDocument();
  });
});
