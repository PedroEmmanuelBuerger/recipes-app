import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AppRecipesContext from '../context/AppRecipesContext';

export default function RecipeDetails() {
  const history = useHistory();
  const { RecipesDetailsApi, detailRecipe } = useContext(AppRecipesContext);
  const { location: { pathname } } = history;

  useEffect(() => {
    console.log(detailRecipe);
    const id = pathname.split('/')[2];
    RecipesDetailsApi(id, pathname);
  }, [detailRecipe]);

  return (
    <div>RecipeDetails</div>
  );
}
