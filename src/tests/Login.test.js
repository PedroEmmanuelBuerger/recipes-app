import React from 'react';
import { screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import App from '../App';
import renderWithRouter from '../helpers/renderWithRouter';
import AppReceitasProvider from '../context/AppReceitasProvider';



describe('Verifica os requisitos da tela de LOGIN', () => {
  it('Verifica os inputs de email e senha', () => {
    renderWithRouter(
      <AppRecipesProvider>
        <AppReceitasProvider>
          <App />
        </AppReceitasProvider>
      </AppRecipesProvider>,
    );
  });
  it('', () => {

  });
  it('', () => {

  });
});
