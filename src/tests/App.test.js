import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';

const profileIcon = 'profile-top-btn';
const searchicon = 'search-top-btn';

describe('testa as funcionalidades do header', () => {
  it('verifica se o header é renderizado com ambos os inputs nas paginas: meals, drinks, profile, done-recipes e favorite-recipes', () => {
    const { history } = renderWithRouter(<App />);
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
    const { history } = renderWithRouter(<App />);
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
    const { history } = renderWithRouter(<App />);
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
});
