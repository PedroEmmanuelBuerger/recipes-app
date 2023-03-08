import React, { useState, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppRecipesContext from './AppRecipesContext';

const magic12 = 12;
const magic5 = 5;
const magic6 = 6;

function AppRecipesProvider({ children }) {
  const [recipesMeal, setRecipesMeal] = useState([]);
  const [recipesDrink, setRecipesDrink] = useState([]);
  const [categoriesRecipesMeal, setCategoriesRecipesMeal] = useState([]);
  const [categoriesRecipesDrink, setCategoriesRecipesDrink] = useState([]);
  const [filter, setFilter] = useState([]);
  const [detailRecipe, setDetailRecipe] = useState([]);
  const [mealsRecomaendation, setMealsRecomendation] = useState([]);
  const [drinksRecomendation, setDrinksRecomendation] = useState([]);
  const [searched, setSearched] = useState(false);

  const ApiMeals = async () => {
    const result = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    const data = await result.json();
    const with12 = data.meals.slice(0, magic12);
    setRecipesMeal(with12);
    const recomandationsWith6 = data.meals.slice(0, magic6);
    setMealsRecomendation(recomandationsWith6);
  };
  const ApiDrinks = async () => {
    const result = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    const data = await result.json();
    const with12 = data.drinks.slice(0, magic12);
    setRecipesDrink(with12);
    const recomandationsWith6 = data.drinks.slice(0, magic6);
    setDrinksRecomendation(recomandationsWith6);
  };

  const ApiMealsCategory = async () => {
    const result = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list');
    const data = await result.json();
    const with6 = data.meals.slice(0, magic5);
    setCategoriesRecipesMeal(with6);
  };

  const ApiDrinksCategory = async () => {
    const result = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');
    const data = await result.json();
    const with6 = data.drinks.slice(0, magic5);
    setCategoriesRecipesDrink(with6);
  };

  const filterByCategory = async (category, pathname) => {
    if (filter.length > 0) return setFilter([]);
    if (pathname.includes('meals')) {
      const result = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);
      const data = await result.json();
      const with12 = data.meals.slice(0, magic12);
      setFilter(with12);
    }
    if (pathname.includes('drinks')) {
      const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);
      const data = await result.json();
      const with12 = data.drinks.slice(0, magic12);
      setFilter(with12);
    }
  };

  const RecipesDetailsApi = async (id, pathname) => {
    if (pathname.includes('meals')) {
      const result = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await result.json();
      return setDetailRecipe(data.meals[0]) && setIgredients(igredientsList);
    }
    const result = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
    const data = await result.json();
    setDetailRecipe(data.drinks[0]);
  };

  useEffect(() => {
    ApiMeals();
    ApiDrinks();
    ApiMealsCategory();
    ApiDrinksCategory();
  }, []);

  const context = useMemo(() => ({
    recipesMeal,
    setRecipesMeal,
    recipesDrink,
    setRecipesDrink,
    categoriesRecipesMeal,
    setCategoriesRecipesMeal,
    categoriesRecipesDrink,
    setCategoriesRecipesDrink,
    filterByCategory,
    filter,
    setFilter,

    RecipesDetailsApi,
    detailRecipe,
    mealsRecomaendation,
    drinksRecomendation,
    searched,
    setSearched,
  }), [recipesMeal, recipesDrink, categoriesRecipesDrink, categoriesRecipesMeal, filter,
    detailRecipe, mealsRecomaendation, drinksRecomendation, searched]);

  return (
    <AppRecipesContext.Provider value={ context }>
      {children}
    </AppRecipesContext.Provider>
  );
}

AppRecipesProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppRecipesProvider;
