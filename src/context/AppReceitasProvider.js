import React, { useEffect, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { fetchApiBebidasIngrediente, fetchApiBebidasLetra,
  fetchApiBebidasName, fetchApiComidasIngrediente, fetchApiComidasLetra,
  fetchApiComidasName } from '../helpers/fetchApi';
import AppReceitasContext from './AppReceitasContext';
// Função para chamada da Api de comidas e bebidas. Ver endpoint
function AppReceitasProvider({ children }) {
  const [buscaPorComidaIngrediente, setBuscaPorComidaIngrediente] = useState('milk');
  const [buscaPorComidaName, setBuscaPorComidaName] = useState('milk');
  const [buscaPorComidaLetra, setBuscaPorComidaLetra] = useState('milk');
  const [buscaPorBebidaIngrediente, setBuscaPorBebidaIngrediente] = useState('');
  const [buscaPorBebidaName, setBuscaPorBebidaName] = useState('');
  const [buscaPorBebidaLetra, setBuscaPorBebidaLetra] = useState('');

  useEffect(() => {
    fetchApiComidasIngrediente(buscaPorComidaIngrediente);
    fetchApiComidasName(buscaPorComidaName);
    fetchApiComidasLetra(buscaPorComidaLetra);
    fetchApiBebidasIngrediente(buscaPorBebidaIngrediente);
    fetchApiBebidasName(buscaPorBebidaName);
    fetchApiBebidasLetra(buscaPorBebidaLetra);
  }, [buscaPorComidaIngrediente, buscaPorComidaName, buscaPorComidaLetra,
    buscaPorBebidaIngrediente, buscaPorBebidaName, buscaPorBebidaLetra]);

  const context = useMemo(() => ({
    buscaPorComidaIngrediente,
    buscaPorComidaLetra,
    buscaPorComidaName,
    setBuscaPorComidaIngrediente,
    setBuscaPorComidaLetra,
    setBuscaPorComidaName,
    buscaPorBebidaIngrediente,
    buscaPorBebidaLetra,
    buscaPorBebidaName,
    setBuscaPorBebidaIngrediente,
    setBuscaPorBebidaLetra,
    setBuscaPorBebidaName,
  }), [
    buscaPorComidaIngrediente,
    buscaPorComidaLetra,
    buscaPorComidaName,
    setBuscaPorComidaIngrediente,
    setBuscaPorComidaLetra,
    setBuscaPorComidaName,
    buscaPorBebidaIngrediente,
    buscaPorBebidaLetra,
    buscaPorBebidaName,
    setBuscaPorBebidaIngrediente,
    setBuscaPorBebidaLetra,
    setBuscaPorBebidaName,
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
