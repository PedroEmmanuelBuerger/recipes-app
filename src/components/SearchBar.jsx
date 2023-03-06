import React, { useContext, useEffect } from 'react';
import AppReceitasContext from '../context/AppReceitasContext';

function SearchBar() {
  const {
    fetchAPI,
    selected,
    setSelected,
    textInput,
    setTextInput,
  } = useContext(AppReceitasContext);

  const handleClick = async () => {
    const teste = await fetchAPI(textInput);
    console.log(teste, 'vazio?');
  };

  const verifica = () => {
    if (textInput.length > 1 && selected === 'primeira-letra') {
      return global.alert('Your search must have only 1 (one) character');
    }
  };

  useEffect(() => {
    verifica();
  }, [textInput]);

  return (
    <form>
      <label htmlFor="ingredient">
        <input
          checked={ selected === 'ingrediente' }
          type="radio"
          name="search"
          value="ingrediente"
          data-testid="ingredient-search-radio"
          id="ingredient"
          onChange={ ({ target }) => setSelected(target.value) }
        />
        Ingredient

      </label>

      <label htmlFor="name">
        <input
          checked={ selected === 'nome' }
          type="radio"
          name="search"
          value="nome"
          data-testid="name-search-radio"
          id="name"
          onChange={ ({ target }) => setSelected(target.value) }
        />
        Name
      </label>

      <label htmlFor="letter">
        <input
          checked={ selected === 'primeira-letra' }
          type="radio"
          name="search"
          value="primeira-letra"
          data-testid="first-letter-search-radio"
          id="letter"
          onChange={ ({ target }) => {
            setSelected(target.value);
            setTextInput('');
          } }
        />
        First letter
      </label>

      {' '}
      <label htmlFor="exec-search-btn">
        <button
          type="button"
          data-testid="exec-search-btn"
          name="exec-search-btn"
          id="exec-search-btn"
          onClick={ handleClick }
        >
          {' '}
          Search
        </button>
      </label>
    </form>
  );
}

export default SearchBar;
