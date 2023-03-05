import React from 'react';

function SearchBar() {
  return (
    <form>
      <label htmlFor="ingredient">
        <input
          type="radio"
          name="ingredient"
          value=""
          data-testid="ingredient-search-radio"
          id="ingredient"
        />
        Ingredient

      </label>

      <label htmlFor="name">
        <input
          type="radio"
          name="name"
          value=""
          data-testid="name-search-radio"
          id="name"
        />
        Name
      </label>

      <label htmlFor="letter">
        <input
          type="radio"
          name="letter"
          value="talvez"
          data-testid="first-letter-search-radio"
          id="letter"
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
        >
          {' '}
          Search
        </button>
      </label>
    </form>
  );
}

export default SearchBar;
