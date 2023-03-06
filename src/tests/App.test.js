import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';
import AppReceitasProvider from '../context/AppReceitasProvider';

const profileIcon = 'profile-top-btn';
const searchicon = 'search-top-btn';

describe('testa as funcionalidades do header', () => {
  it('verifica se o header é renderizado com ambos os inputs nas paginas: meals, drinks, profile, done-recipes e favorite-recipes', () => {
    const { history } = renderWithRouter(
      <AppReceitasProvider>
        <App />
      </AppReceitasProvider>,
    );
    act(() => {
      history.push('/meals');
    });
    const { pathname } = history.location;
    expect(pathname).toBe('/meals');
    const profileIcon1 = screen.getByTestId(profileIcon);
    expect(profileIcon1).toBeInTheDocument();
    const searchIcon1 = screen.getByTestId(searchicon);
    expect(searchIcon1).toBeInTheDocument();
    act(() => {
      history.push('/drinks');
    });
    const { pathname: pathname2 } = history.location;
    expect(pathname2).toBe('/drinks');
    const profileIcon2 = screen.getByTestId(profileIcon);
    expect(profileIcon2).toBeInTheDocument();
    const searchIcon2 = screen.getByTestId(searchicon);
    expect(searchIcon2).toBeInTheDocument();
    act(() => {
      history.push('/profile');
    });
    const { pathname: pathname3 } = history.location;
    expect(pathname3).toBe('/profile');
    const profileIcon3 = screen.getByTestId(profileIcon);
    expect(profileIcon3).toBeInTheDocument();
    act(() => {
      history.push('/done-recipes');
    });
    const { pathname: pathname4 } = history.location;
    expect(pathname4).toBe('/done-recipes');
    const profileIcon4 = screen.getByTestId(profileIcon);
    expect(profileIcon4).toBeInTheDocument();
    act(() => {
      history.push('/favorite-recipes');
    });
    const { pathname: pathname5 } = history.location;
    expect(pathname5).toBe('/favorite-recipes');
    const profileIcon5 = screen.getByTestId(profileIcon);
    expect(profileIcon5).toBeInTheDocument();
  });
  it('verifica se não é renderizado ao entrar na pagina de login(/)', () => {
    const { history } = renderWithRouter(<App />);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
    const profileIcon1 = screen.queryByTestId(profileIcon);
    expect(profileIcon1).not.toBeInTheDocument();
    const searchIcon1 = screen.queryByTestId(searchicon);
    expect(searchIcon1).not.toBeInTheDocument();
  });
  it('verifica se ao clicar no icone de perfil(/profile) é redirecionado para a pagina de perfil', () => {
    const { history } = renderWithRouter(
      <AppReceitasProvider>
        <App />
      </AppReceitasProvider>,
    );
    act(() => {
      history.push('/meals');
    });
    const { pathname } = history.location;
    expect(pathname).toBe('/meals');
    const profileIcon1 = screen.getByTestId(profileIcon);
    expect(profileIcon1).toBeInTheDocument();
    act(() => {
      profileIcon1.click();
    });
    const { pathname: pathname2 } = history.location;
    expect(pathname2).toBe('/profile');
  });
  it('verifica se ao clicar no icone de busca(/search) o input de busca aparece e se ao clicar novamente ele some', () => {
    const { history } = renderWithRouter(
      <AppReceitasProvider>
        <App />
      </AppReceitasProvider>,
    );
    act(() => {
      history.push('/meals');
    });
    const { pathname } = history.location;
    expect(pathname).toBe('/meals');
    const searchIcon1 = screen.getByTestId(searchicon);
    expect(searchIcon1).toBeInTheDocument();
    act(() => {
      searchIcon1.click();
    });
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
    act(() => {
      searchIcon1.click();
    });
    expect(searchInput).not.toBeInTheDocument();
  });
  it('testa se o input do header faz a pesquisa', async () => {
    const { history } = renderWithRouter(
      <AppReceitasProvider>
        <App />
      </AppReceitasProvider>,
    );
    act(() => {
      history.push('/meals');
    });
    const { pathname } = history.location;
    expect(pathname).toBe('/meals');
    const searchIcon1 = screen.getByTestId(searchicon);
    expect(searchIcon1).toBeInTheDocument();
    act(() => {
      searchIcon1.click();
    });
    const searchInput = screen.getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
    act(() => {
      userEvent.type(searchInput, 'Arrabiata');
    });
    expect(searchInput.value).toBe('Arrabiata');
  });
});

describe('teste o componente dos recipes', () => {
  it('verifica se é feito uma requesição a api e verifica se as coisas são renderizadas normalmente tanto na pagina do meals', async () => {
    const { history } = renderWithRouter(
      <AppReceitasProvider>
        <App />
      </AppReceitasProvider>,
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
    const recipeCard0 = await screen.findByTestId('0-recipe-card');
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
  it('verifica se a renderização dos elementos do recipes é feito na pagina do drink', async () => {
    const { history } = renderWithRouter(
      <AppReceitasProvider>
        <App />
      </AppReceitasProvider>,
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
    const recipeCard0 = await screen.findByTestId('0-recipe-card');
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
});
