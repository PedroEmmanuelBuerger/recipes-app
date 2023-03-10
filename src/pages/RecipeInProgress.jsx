import React, { useEffect, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ButtonsSmall from '../components/ButtonsSmall';
import AppRecipesContext from '../context/AppRecipesContext';

const inputCheckbox = 'input[type="checkbox"]';

export default function RecipeInProgress() {
  const { RecipesDetailsApi, detailRecipe } = useContext(AppRecipesContext);
  const history = useHistory();
  const { pathname } = history.location;

  const [ingredients, setIngredients] = useState([]);
  const [disabledButton, setDisabledButton] = useState(false);

  const AltCss = () => {
    const AllCheckbox = document.querySelectorAll(inputCheckbox);
    AllCheckbox.forEach((checkbox) => {
      if (checkbox.checked) {
        checkbox.parentNode.style.textDecoration = 'line-through';
      } else {
        checkbox.parentNode.style.textDecoration = 'none';
      }
    });
  };

  const verifyCheckbox = () => {
    const oldLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
    const getThisRecipe = oldLocalStorage
      .filter((item) => item[0] === detailRecipe
        .idMeal || item[0] === detailRecipe.idDrink);
    const recipesWithoutId = getThisRecipe.map((item) => item.slice(1));
    const recipesArr = recipesWithoutId.flat();
    const AllCheckbox = document.querySelectorAll(inputCheckbox);
    AllCheckbox.forEach((checkbox) => {
      if (recipesArr.includes(checkbox.parentNode.innerText)) {
        checkbox.checked = true;
        AltCss();
      }
    });
  };

  const saveRecipes = () => {
    const oldLocalStorage = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    const newLocalStorage = [
      ...oldLocalStorage,
      {
        id: detailRecipe.idMeal || detailRecipe.idDrink,
        nationality: detailRecipe.strArea || '',
        name: detailRecipe.strDrink || detailRecipe.strMeal,
        category: detailRecipe.strCategory || '',
        image: detailRecipe.strDrinkThumb || detailRecipe.strMealThumb,
        alcoholicOrNot: detailRecipe.strAlcoholic || '',
        type: detailRecipe.strAlcoholic ? 'drink' : 'meal',
        doneDate: new Date().toLocaleDateString(),
        tags: detailRecipe.strTags ? detailRecipe.strTags : [],
      },
    ];
    localStorage.setItem('doneRecipes', JSON.stringify(newLocalStorage));
    history.push('/done-recipes');
  };
  useEffect(() => {
    if (detailRecipe.length === 0) {
      const id = pathname.split('/')[2];
      RecipesDetailsApi(id, pathname);
    }
    if (ingredients.length === 0 && detailRecipe.length !== 0) {
      const alligrendients = Object.entries(detailRecipe)
        .filter((ingredient) => ingredient[0]
          .includes('strIngredient') && ingredient[1] !== null)
        .map((ingredient) => ingredient[1]);
      const removeUnusedIngredients = alligrendients
        .filter((ingredient) => ingredient !== '');
      setIngredients(removeUnusedIngredients);
    }
    verifyCheckbox();
  }, [detailRecipe, ingredients]);

  const verifyBtn = () => {
    const AllCheckbox = document.querySelectorAll(inputCheckbox);
    const checked = [];
    AllCheckbox.forEach((checkbox) => {
      if (checkbox.checked) {
        checked.push(checkbox);
      }
    });
    if (checked.length === AllCheckbox.length) {
      return setDisabledButton(true);
    }
    return setDisabledButton(false);
  };
  const saveLocalStorage = () => {
    verifyBtn();
    const oldLocalStorage = JSON.parse(localStorage.getItem('inProgressRecipes')) || [];
    const verifyId = oldLocalStorage
      .filter((item) => item[0] === detailRecipe
        .idMeal || item[0] === detailRecipe.idDrink);
    if (verifyId.length !== 0) {
      const index = oldLocalStorage.indexOf(verifyId[0]);
      oldLocalStorage.splice(index, 1);
    }
    const AllCheckbox = document.querySelectorAll('input[type="checkbox"]');
    const selectedIngredients = [];
    AllCheckbox.forEach((checkbox) => {
      if (checkbox.checked) {
        selectedIngredients.push(checkbox.parentNode.innerText);
      }
    });
    const recipeInProgress = [
      detailRecipe.idMeal || detailRecipe.idDrink,
      ...selectedIngredients,
    ];
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
      <button
        data-testid="finish-recipe-btn"
        className="startButton"
        disabled={ !disabledButton }
        onClick={ saveRecipes }
      >
        Finalizar Receita
      </button>
    </div>
  );
}
