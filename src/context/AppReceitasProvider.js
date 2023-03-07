import React, { useState, useMemo, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppReceitasContext from './AppReceitasContext';

function AppReceitasProvider({ children }) {
  const history = useHistory();

  // Estados que controlam o formulário
  const [selected, setSelected] = useState('');
  const [textInput, setTextInput] = useState('');

  const [buscaPorComida, setBuscaPorComida] = useState('');
  const [buscaPorBebida, setBuscaPorBebida] = useState('');
  const [title, setTitle] = useState('');
  const [SearchOk, setSearchOk] = useState(true);
  const [SearchBarInput, setSearchBarInput] = useState(false);

  const fetchAPI = useCallback(async (value) => {
    const urlBebidasSearch = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?';
    const urlBebidasFilter = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?';

    const urlComidasSearch = 'https://www.themealdb.com/api/json/v1/1/search.php?';
    const urlComidasFilter = 'https://www.themealdb.com/api/json/v1/1/filter.php?';
    // Condição estar na página meals e qual radio button foi selecionado.
    if (history.location.pathname === '/meals') {
      let endpoint = `${urlComidasFilter}i=${value}`;
      if (selected === 'ingrediente') { endpoint = `${urlComidasFilter}i=${value}`; }
      if (selected === 'nome') { endpoint = `${urlComidasSearch}s=${value}`; }
      if (selected === 'primeira-letra') { endpoint = `${urlComidasSearch}f=${value}`; }
      const response = await fetch(endpoint);
      const data = await response.json();
      setBuscaPorComida(data);
    }

    if (history.location.pathname === '/drinks') {
      let endpoint = `${urlBebidasFilter}i=${value}`;
      if (selected === 'ingrediente') { endpoint = `${urlBebidasFilter}i=${value}`; }
      if (selected === 'nome') { endpoint = `${urlBebidasSearch}s=${value}`; }
      if (selected === 'primeira-letra') { endpoint = `${urlBebidasSearch}f=${value}`; }
      const response = await fetch(endpoint);
      const data = await response.json();
      setBuscaPorBebida(data);
    }
  }, [history.location.pathname, selected]);

  const context = useMemo(() => ({
    fetchAPI,
    selected,
    setSelected,
    buscaPorBebida,
    setBuscaPorBebida,
    buscaPorComida,
    setBuscaPorComida,
    title,
    setTitle,
    SearchOk,
    setSearchOk,
    SearchBarInput,
    setSearchBarInput,
    textInput,
    setTextInput,
  }), [
    fetchAPI,
    selected,
    buscaPorBebida,
    buscaPorComida,
    title,
    SearchOk,
    SearchBarInput,
    textInput,
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
