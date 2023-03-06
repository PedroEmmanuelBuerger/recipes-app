import React, { useState, useMemo } from 'react';

import PropTypes from 'prop-types';
import { fetchApiComidas, fetchApiBebidas } from '../helpers/fetchApi';
import AppReceitasContext from './AppReceitasContext';
// Função para chamada da Api de comidas e bebidas. Ver endpoint
function AppReceitasProvider({ children }) {
  const [buscaPorComida, setBuscaPorComida] = useState('milk');
  const [buscaPorBebida, setBuscaPorBebida] = useState('');

  const context = useMemo(() => ({
    buscaPorComida,
    setBuscaPorComida,
    buscaPorBebida,
    setBuscaPorBebida,
  }), [
    buscaPorComida,
    setBuscaPorComida,
    buscaPorBebida,
    setBuscaPorBebida,
  ]);

  return (
    <AppReceitasContext.Provider value={ context }>
      {children}
    </AppReceitasContext.Provider>
  );
}

AppReceitasProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppReceitasProvider;
