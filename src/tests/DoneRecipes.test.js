import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';
import AppReceitasProvider from '../context/AppReceitasProvider';
import AppRecipesProvider from '../context/AppRecipesProvider';

const objLocal = {
  type: 'meal',
  nationality: '',
  alcoholicOrNot: '',
};

const mealsUrl = '/meals/52977';

describe('testando component doneRecipes', () => {
  it('verifica se todos os elementos são renderizados no meals', async () => {
    const { history } = renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );
    act(() => {
      history.push(mealsUrl);
    });
    const { pathname: pathname1 } = history.location;
    expect(pathname1).toBe(mealsUrl);
    const name = await screen.findByRole('heading', { name: /corba/i });
    expect(name).toBeInTheDocument();
    const recipePhoto = await screen.findByRole('img', { name: /recipe/i });
    expect(recipePhoto).toBeInTheDocument();
    const category = await screen.findByTestId('recipe-category');
    expect(category).toBeInTheDocument();
    const igredientsAndMeasure1 = await screen.findByTestId('0-ingredient-name-and-measure');
    expect(igredientsAndMeasure1).toBeInTheDocument();
    const igredientsAndMeasure2 = await screen.findByTestId('1-ingredient-name-and-measure');
    expect(igredientsAndMeasure2).toBeInTheDocument();
    const igredientsAndMeasure3 = await screen.findByTestId('2-ingredient-name-and-measure');
    expect(igredientsAndMeasure3).toBeInTheDocument();
    const igredientsAndMeasure4 = await screen.findByTestId('3-ingredient-name-and-measure');
    expect(igredientsAndMeasure4).toBeInTheDocument();
    const igredientsAndMeasure5 = await screen.findByTestId('4-ingredient-name-and-measure');
    expect(igredientsAndMeasure5).toBeInTheDocument();
    const igredientsAndMeasure6 = await screen.findByTestId('5-ingredient-name-and-measure');
    expect(igredientsAndMeasure6).toBeInTheDocument();
    const igredientsAndMeasure7 = await screen.findByTestId('6-ingredient-name-and-measure');
    expect(igredientsAndMeasure7).toBeInTheDocument();
    const igredientsAndMeasure8 = await screen.findByTestId('7-ingredient-name-and-measure');
    expect(igredientsAndMeasure8).toBeInTheDocument();
    const igredientsAndMeasure9 = await screen.findByTestId('8-ingredient-name-and-measure');
    expect(igredientsAndMeasure9).toBeInTheDocument();
    const igredientsAndMeasure10 = await screen.findByTestId('9-ingredient-name-and-measure');
    expect(igredientsAndMeasure10).toBeInTheDocument();
    const igredientsAndMeasure11 = await screen.findByTestId('10-ingredient-name-and-measure');
    expect(igredientsAndMeasure11).toBeInTheDocument();
    const igredientsAndMeasure12 = await screen.findByTestId('11-ingredient-name-and-measure');
    expect(igredientsAndMeasure12).toBeInTheDocument();
    const instructions = await screen.findByTestId('instructions');
    expect(instructions).toBeInTheDocument();
    const video = await screen.findByTitle(/video/i);
    expect(video).toBeInTheDocument();
  });
  it('verifica se na tela de drinks é tudo renderizado igualmente', async () => {
    const { history } = renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );
    act(() => {
      history.push('/drinks/15997');
    });
    const { pathname: pathname1 } = history.location;
    expect(pathname1).toBe('/drinks/15997');
    const name = await screen.findByTestId('recipe-title');
    expect(name).toBeInTheDocument();
    const recipePhoto = await screen.findByRole('img', { name: /recipe/i });
    expect(recipePhoto).toBeInTheDocument();
    const category = await screen.findByTestId('recipe-category');
    expect(category).toBeInTheDocument();
    const igredientsAndMeasure1 = await screen.findByTestId('0-ingredient-name-and-measure');
    expect(igredientsAndMeasure1).toBeInTheDocument();
    const igredientsAndMeasure2 = await screen.findByTestId('1-ingredient-name-and-measure');
    expect(igredientsAndMeasure2).toBeInTheDocument();
    const igredientsAndMeasure3 = await screen.findByTestId('2-ingredient-name-and-measure');
    expect(igredientsAndMeasure3).toBeInTheDocument();
    const instructions = await screen.findByTestId('instructions');
    expect(instructions).toBeInTheDocument();
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
      history.push(mealsUrl);
    });
    const startButton = await screen.findByTestId('start-recipe-btn');
    expect(startButton).toBeInTheDocument();
    const favoriteButton = await screen.findByTestId('favorite-btn');
    expect(favoriteButton).toBeInTheDocument();
    const shareButton = await screen.findByTestId('share-btn');
    expect(shareButton).toBeInTheDocument();
  });
  it('verifica se existe um carossel e se ele renderiza 2 itens na tela', async () => {
    const { history } = renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );
    act(() => {
      history.push(mealsUrl);
    });
    const GG = await screen.findByRole('heading', { name: /gg/i });
    expect(GG).toBeInTheDocument();
    const a1 = await screen.findByRole('heading', { name: /a1/i });
    expect(a1).toBeInTheDocument();
    const abc = await screen.findByRole('heading', { name: /abc/i });
    expect(abc).toBeInTheDocument();
    expect(abc).toBeVisible();
  });
  it('verifica os botões de start', async () => {
    const { history } = renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );
    act(() => {
      history.push(mealsUrl);
    });
    const startButton = await screen.findByTestId('start-recipe-btn');
    expect(startButton).toBeInTheDocument();
    userEvent.click(startButton);
    const { pathname: pathname1 } = history.location;
    expect(pathname1).toBe('/meals/52977/in-progress');
  });
  it('verifica o botao de favoritar', async () => {
    const { history } = renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );
    act(() => {
      history.push(mealsUrl);
    });
    const favoriteButton = await screen.findByTestId('favorite-btn');
    expect(favoriteButton).toBeInTheDocument();
    userEvent.click(favoriteButton);
    const localStorageKeys = Object.keys(localStorage);
    expect(localStorageKeys).toContain('favoriteRecipes');
    const favoriteRecipes = JSON.parse(localStorage.getItem('favoriteRecipes'));
    expect(favoriteRecipes).toHaveLength(1);
    expect(favoriteRecipes[0]).toEqual(objLocal);
  });
});
