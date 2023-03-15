import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppRecipesContext from '../context/AppRecipesContext';
import RecomandationCard from './RecomandationCard';
import Buttons from './Buttons';
// import '../Details.css';

export default function RecipeDetails() {
  const history = useHistory();
  const { RecipesDetailsApi, detailRecipe } = useContext(AppRecipesContext);
  const { location: { pathname } } = history;
  const [category, setcageroy] = useState([]);
  const [igredients, setIgredients] = useState([]);
  const [measures, setMeasures] = useState([]);

  useEffect(() => {
    const id = pathname.split('/')[2];
    RecipesDetailsApi(id, pathname);
    localStorage.removeItem('mealsProgess');
    localStorage.removeItem('cocktailsProgess');
  }, []);

  useEffect(() => {
    const cat = pathname
      .includes('meals') ? detailRecipe.strCategory : detailRecipe.strAlcoholic;
    setcageroy(cat);
    const igredientsArray = Object.keys(detailRecipe)
      .filter((key) => key.includes('strIngredient') && detailRecipe[key]);
    setIgredients(igredientsArray);
    const measuresArray = Object.keys(detailRecipe)
      .filter((key) => key.includes('strMeasure') && detailRecipe[key]);
    setMeasures(measuresArray);
  }, [detailRecipe]);

  return (
    <div>
      <div>
        <h1 data-testid="recipe-title">
          { detailRecipe.strMeal || detailRecipe.strDrink }
        </h1>
        <img
          data-testid="recipe-photo"
          src={ detailRecipe.strMealThumb || detailRecipe.strDrinkThumb }
          alt="recipe"
        />
        <h2 data-testid="recipe-category">{category }</h2>
        {igredients.map((igredient, index) => (
          <div key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
            <p>
              {detailRecipe[igredient]}
              {detailRecipe[measures[index]]}
            </p>
          </div>
        ))}
        <h3 data-testid="instructions">
          { detailRecipe.strInstructions}
        </h3>
        {detailRecipe.strYoutube && (
          <iframe
            data-testid="video"
            title="video"
            width="450"
            height="315"
            src={ detailRecipe.strYoutube.replace('watch?v=', 'embed/') }
          />
        )}
      </div>
      <RecomandationCard />
      <Buttons />
    </div>
  );
}
