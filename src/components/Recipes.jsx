import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppReceitasContext from '../context/AppReceitasContext';

export default function Recipes() {
  const history = useHistory();
  const { recipes, setRecipes, categoriesRecipes,
    setCategoriesRecipes } = useContext(AppReceitasContext);

  const [withoutFilter, setwithoutFilterscat] = useState([]);
  const [toggled, setToggled] = useState(false);

  const getRecipes = async () => {
    const { location: { pathname } } = history;
    const magicNumber = 12;
    const UrlApi = pathname.includes('meals')
      ? 'https://www.themealdb.com/api/json/v1/1/search.php?s='
      : 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
    const result = await fetch(UrlApi)
      .then((response) => response.json())
      .then((data) => data.meals || data.drinks);
    const firtsResults = result.slice(0, magicNumber);
    setRecipes(firtsResults);
    setwithoutFilterscat(firtsResults);
  };

  const getCategories = async () => {
    const { location: { pathname } } = history;
    const magicNumber = 5;
    const UrlApi = pathname.includes('meals')
      ? 'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
      : 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
    const result = await fetch(UrlApi)
      .then((response) => response.json())
      .then((data) => data.meals || data.drinks);
    const firtsResults = result.slice(0, magicNumber);
    setCategoriesRecipes(firtsResults);
  };

  const setCategoryFunc = async (category) => {
    const { location: { pathname } } = history;
    const magicNumber = 12;
    const UrlApi = pathname.includes('meals')
      ? `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
      : `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
    const categoryApi = await fetch(UrlApi)
      .then((response) => response.json())
      .then((data) => data.meals || data.drinks);
    const firtsResults = categoryApi.slice(0, magicNumber);
    setRecipes(firtsResults);
    setToggled(!toggled);
  };

  const removeFilters = () => {
    setRecipes(withoutFilter);
    setToggled(!toggled);
  };

  const toggle = (category) => {
    if (!toggled) {
      setCategoryFunc(category);
    } else {
      removeFilters();
    }
  };

  useEffect(() => {
    getRecipes();
    getCategories();
  }, []);

  return (
    <div>
      <button
        onClick={ () => removeFilters() }
        data-testid="All-category-filter"
      >
        All
      </button>
      {categoriesRecipes.map((category, index) => (
        <button
          key={ index }
          data-testid={ `${category.strCategory}-category-filter` }
          type="button"
          onClick={ () => toggle(category.strCategory) }
        >
          {category.strCategory}
        </button>
      ))}
      {recipes.map((recipe, index) => (
        <div key={ index } data-testid={ `${index}-recipe-card` }>
          <h2 data-testid={ `${index}-card-name` }>
            {recipe.strMeal || recipe.strDrink}
          </h2>
          <img
            data-testid={ `${index}-card-img` }
            src={ recipe.strMealThumb || recipe.strDrinkThumb }
            alt={ recipe.strMeal || recipe.strDrink }
          />
        </div>
      ))}
    </div>
  );
}
