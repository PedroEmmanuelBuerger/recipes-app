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

describe('teste as funcionalidades de recipeInProgrss', () => {
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
    const finishBtn = await screen.findByTestId('finish-recipe-btn');
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
    expect(pathname1).toBe('/drinks/15997/in-progress');
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
    const finishBtn = await screen.findByTestId('finish-recipe-btn');
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
});
