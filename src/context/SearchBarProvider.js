import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { fetchApiComidas, fetchApiBebidas } from '../helpers/fetchApi';
import SearchBarContext from './SearchBarContext';

// Função para chamada da Api de comidas e bebidas. Ver endpoint
function SearchBarProvider({ children }) {
  const [buscaPorComida, setBuscaPorComida] = useState('milk');
  const [buscaPorBebida, setBuscaPorBebida] = useState('');
  useEffect(() => {
    fetchApiComidas(buscaPorComida);
    fetchApiBebidas(buscaPorBebida);
  }, [buscaPorComida, buscaPorBebida]);

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
    <SearchBarContext.Provider value={ context }>
      {children}
    </SearchBarContext.Provider>
  );
}

SearchBarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SearchBarProvider;
