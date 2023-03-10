import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';
import AppReceitasProvider from '../context/AppReceitasProvider';
import AppRecipesProvider from '../context/AppRecipesProvider';

const igredient0 = '0-ingredient-step';
const mealsURL = '/meals/52977/in-progress';
const drinkUrl = '/drinks/15997/in-progress';
const finishBtns = 'finish-recipe-btn';
const styles = 'text-decoration: line-through';

describe('teste as funcionalidades de recipeInProgrss', () => {
  afterEach(() => localStorage.clear());
  it('verifica se ele renderiza tudo como esperado no meals', async () => {
    const { history } = renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );
    act(() => {
      history.push(mealsURL);
    });
    const { pathname: pathname1 } = history.location;
    expect(pathname1).toBe(mealsURL);
    const shareButton = await screen.findByTestId('share-btn');
    expect(shareButton).toBeInTheDocument();
    const favoriteButton = await screen.findByTestId('favorite-btn');
    expect(favoriteButton).toBeInTheDocument();
    const igredientStep0 = await screen.findByTestId(igredient0);
    expect(igredientStep0).toBeInTheDocument();
    const igredientStep1 = await screen.findByTestId('1-ingredient-step');
    expect(igredientStep1).toBeInTheDocument();
    const igredientStep2 = await screen.findByTestId('2-ingredient-step');
    expect(igredientStep2).toBeInTheDocument();
    const igredientStep3 = await screen.findByTestId('3-ingredient-step');
    expect(igredientStep3).toBeInTheDocument();
    const igredientStep4 = await screen.findByTestId('4-ingredient-step');
    expect(igredientStep4).toBeInTheDocument();
    const igredientStep5 = await screen.findByTestId('5-ingredient-step');
    expect(igredientStep5).toBeInTheDocument();
    const igredientStep6 = await screen.findByTestId('6-ingredient-step');
    expect(igredientStep6).toBeInTheDocument();
    const igredientStep7 = await screen.findByTestId('7-ingredient-step');
    expect(igredientStep7).toBeInTheDocument();
    const igredientStep8 = await screen.findByTestId('8-ingredient-step');
    expect(igredientStep8).toBeInTheDocument();
    const igredientStep9 = await screen.findByTestId('9-ingredient-step');
    expect(igredientStep9).toBeInTheDocument();
    const igredientStep10 = await screen.findByTestId('10-ingredient-step');
    expect(igredientStep10).toBeInTheDocument();
    const igredientStep11 = await screen.findByTestId('11-ingredient-step');
    expect(igredientStep11).toBeInTheDocument();
    const igredientStep12 = await screen.findByTestId('12-ingredient-step');
    expect(igredientStep12).toBeInTheDocument();
    const category = await screen.findByTestId('recipe-category');
    expect(category).toBeInTheDocument();
    const instructions = await screen.findByTestId('instructions');
    expect(instructions).toBeInTheDocument();
    const finishBtn = await screen.findByTestId(finishBtns);
    expect(finishBtn).toBeInTheDocument();
  });
  it('verifica se na pagina de progresso de bebida aparecem as mesma coisas', async () => {
    const { history } = renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );
    act(() => {
      history.push('/drinks/15997/in-progress');
    });
    const { pathname: pathname1 } = history.location;
    expect(pathname1).toBe(drinkUrl);
    const shareButton = await screen.findByTestId('share-btn');
    expect(shareButton).toBeInTheDocument();
    const favoriteButton = await screen.findByTestId('favorite-btn');
    expect(favoriteButton).toBeInTheDocument();
    const igredientStep0 = await screen.findByTestId(igredient0);
    expect(igredientStep0).toBeInTheDocument();
    const igredientStep1 = await screen.findByTestId('1-ingredient-step');
    expect(igredientStep1).toBeInTheDocument();
    const igredientStep2 = await screen.findByTestId('2-ingredient-step');
    expect(igredientStep2).toBeInTheDocument();
    const alchool = await screen.findByTestId('recipe-category');
    expect(alchool).toBeInTheDocument();
    const instructions = await screen.findByTestId('instructions');
    expect(instructions).toBeInTheDocument();
    const finishBtn = await screen.findByTestId(finishBtns);
    expect(finishBtn).toBeInTheDocument();
  });
  it('verifica se ele altera o css de um igrendient caso o mesmo seja escolhido', async () => {
    const { history } = renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );
    act(() => {
      history.push(mealsURL);
    });
    const allCheckboxes = await screen.findAllByRole('checkbox');
    expect(allCheckboxes[0]).not.toHaveClass('checked');
    userEvent.click(allCheckboxes[0]);
    const firtsCheckbox = await screen.findByTestId('0-ingredient-step');
    expect(firtsCheckbox).toHaveStyle('text-decoration: line-through');
  });
  it('verficia se o checkbox marca e se o botão habilita', async () => {
    const { history } = renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );
    act(() => {
      history.push(mealsURL);
    });
    const allCheckboxes = await screen.findAllByRole('checkbox');
    const btnDoneRecipe = await screen.findByTestId(finishBtns);
    expect(btnDoneRecipe).toBeDisabled();
    expect(allCheckboxes[0]).not.toHaveClass('checked');
    userEvent.click(allCheckboxes[0]);
    userEvent.click(allCheckboxes[1]);
    userEvent.click(allCheckboxes[2]);
    userEvent.click(allCheckboxes[3]);
    userEvent.click(allCheckboxes[4]);
    userEvent.click(allCheckboxes[5]);
    userEvent.click(allCheckboxes[6]);
    userEvent.click(allCheckboxes[7]);
    userEvent.click(allCheckboxes[8]);
    userEvent.click(allCheckboxes[9]);
    userEvent.click(allCheckboxes[10]);
    userEvent.click(allCheckboxes[11]);
    userEvent.click(allCheckboxes[12]);
    expect(btnDoneRecipe).toBeEnabled();
  });
  it('verifica se ao clicar em done recipe é salvo no local storage e o usuario é redirecionado', async () => {
    const { history } = renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );
    act(() => {
      history.push(mealsURL);
    });
    const allCheckboxes = await screen.findAllByRole('checkbox');
    const btnDoneRecipe = await screen.findByTestId('finish-recipe-btn');
    expect(btnDoneRecipe).toBeDisabled();
    expect(allCheckboxes[0]).not.toHaveClass('checked');
    userEvent.click(allCheckboxes[0]);
    userEvent.click(allCheckboxes[1]);
    userEvent.click(allCheckboxes[2]);
    userEvent.click(allCheckboxes[3]);
    userEvent.click(allCheckboxes[4]);
    userEvent.click(allCheckboxes[5]);
    userEvent.click(allCheckboxes[6]);
    userEvent.click(allCheckboxes[7]);
    userEvent.click(allCheckboxes[8]);
    userEvent.click(allCheckboxes[9]);
    userEvent.click(allCheckboxes[10]);
    userEvent.click(allCheckboxes[11]);
    userEvent.click(allCheckboxes[12]);
    expect(btnDoneRecipe).toBeEnabled();
    userEvent.click(btnDoneRecipe);
    const { pathname: pathname1 } = history.location;
    expect(pathname1).toBe('/done-recipes');
    const doneRecipes = JSON.parse(localStorage.getItem('doneRecipes'));
    expect(doneRecipes).toHaveLength(1);
    expect(doneRecipes[0].id).toBe('52977');
  });
  it('verifica se ao recarregar a pagina os checkbox marcados continuam marcados', async () => {
    const { history } = renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );
    act(() => {
      history.push(mealsURL);
    });
    const allCheckboxes = await screen.findAllByRole('checkbox');
    expect(allCheckboxes[0]).not.toHaveClass('checked');
    userEvent.click(allCheckboxes[0]);
    const firtsCheckbox = await screen.findByTestId(igredient0);
    expect(firtsCheckbox).toHaveStyle(styles);
    window.localStorage.setItem('inProgressRecipes', JSON.stringify([
      '52977',
      'Lentils',
    ]));
    act(() => {
      window.location.reload();
    });
    const firtsCheckboxReload = await screen.findByTestId(igredient0);
    expect(firtsCheckboxReload).toHaveStyle(styles);
  });
  it('testa as funcionalidades no drink', async () => {
    const { history } = renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );
    act(() => {
      history.push(drinkUrl);
    });
    const allCheckboxes = await screen.findAllByRole('checkbox');
    expect(allCheckboxes[0]).not.toHaveClass('checked');
    userEvent.click(allCheckboxes[0]);
    const firtsCheckbox = await screen.findByTestId(igredient0);
    expect(firtsCheckbox).toHaveStyle(styles);
    window.localStorage.setItem('inProgressRecipes', JSON.stringify([
      '15997',
      'Galliano',
    ]));
    act(() => {
      window.location.reload();
    });
    const firtsCheckboxReload = await screen.findByTestId(igredient0);
    expect(firtsCheckboxReload).toHaveStyle(styles);
  });
  it('verifica se o done-recipes redireciona tbm', async () => {
    localStorage.clear();
    const { history } = renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );
    act(() => {
      history.push(drinkUrl);
    });

    const btn = await screen.findByTestId(finishBtns);
    expect(btn).toBeDisabled();
    const allCheckboxes = await screen.findAllByRole('checkbox');
    expect(allCheckboxes[0]).not.toHaveClass('checked');
    userEvent.click(allCheckboxes[0]);
    userEvent.click(allCheckboxes[1]);
    userEvent.click(allCheckboxes[2]);
    console.log(allCheckboxes.length);
    expect(btn).toBeEnabled();
    userEvent.click(btn);
    const { pathname: pathname1 } = history.location;
    expect(pathname1).toBe('/done-recipes');
  });
});
