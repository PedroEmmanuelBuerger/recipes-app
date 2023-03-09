import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ButtonsSmall from '../components/ButtonsSmall';
import AppRecipesContext from '../context/AppRecipesContext';

export default function RecipeInProgress() {
  const { RecipesDetailsApi, detailRecipe } = useContext(AppRecipesContext);
  const history = useHistory();
  const { pathname } = history.location;

  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    if (detailRecipe.length === 0) {
      const id = pathname.split('/')[2];
      RecipesDetailsApi(id, pathname);
    }
    const alligrendients = Object.entries(detailRecipe)
      .filter((ingredient) => ingredient[0]
        .includes('strIngredient') && ingredient[1] !== null)
      .map((ingredient) => ingredient[1]);
    const removeUnusedIngredients = alligrendients
      .filter((ingredient) => ingredient !== '');
    setIngredients(removeUnusedIngredients);
  }, [detailRecipe]);

  const AltCss = () => {
    const AllCheckbox = document.querySelectorAll('input[type="checkbox"]');
    AllCheckbox.forEach((checkbox) => {
      if (checkbox.checked) {
        checkbox.parentNode.style.textDecoration = 'line-through';
      } else {
        checkbox.parentNode.style.textDecoration = 'none';
      }
    });
  };

  const saveLocalStorage = () => {
    const AllCheckbox = document.querySelectorAll('input[type="checkbox"]');
    const igredientNumberChecked = [];
    AllCheckbox.forEach((checkbox, index) => {
      if (checkbox.checked) {
        igredientNumberChecked.push(index);
      }
    });
    const id = pathname.split('/')[2];
    const recipeInProgress = {
      id,
      ...igredientNumberChecked,
    };
    const oldLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
    const newLocalStorage = [
      ...oldLocalStorage,
      recipeInProgress,
    ];
    localStorage.setItem('inProgressRecipes', JSON.stringify(newLocalStorage));
  };

  return (
    <div>
      <h1>Recipes In Progress</h1>
      <h2 data-testid="recipe-title">
        { detailRecipe.strDrink || detailRecipe.strMeal }
      </h2>
      <img
        src={ detailRecipe.strDrinkThumb || detailRecipe.strMealThumb }
        data-testid="recipe-photo"
        alt=""
      />
      <ButtonsSmall />
      {ingredients?.map((ingredient, index) => (
        <div key={ index } data-testid={ `${index}-ingredient-step` }>
          <input
            type="checkbox"
            onClick={ () => {
              saveLocalStorage();
              AltCss();
            } }
          />
          <label
            htmlFor={ `${index}-ingredient-step` }
          >
            {ingredient}
          </label>
        </div>
      ))}
      <h3 data-testid="recipe-category">
        { detailRecipe.strAlcoholic || detailRecipe.strCategory }
      </h3>
      <p data-testid="instructions">{ detailRecipe.strInstructions }</p>
      <button data-testid="finish-recipe-btn">Finalizar Receita</button>
    </div>
  );
}
