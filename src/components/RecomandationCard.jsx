import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AppRecipesContext from '../context/AppRecipesContext';

export default function RecomandationCard() {
  const history = useHistory();
  const { location: { pathname } } = history;

  const [recomandation, setRecomandation] = useState([]);

  const { drinksRecomendation, mealsRecomaendation } = useContext(AppRecipesContext);

  useEffect(() => {
    if (pathname.includes('meals')) {
      return setRecomandation(drinksRecomendation);
    }
    return setRecomandation(mealsRecomaendation);
  }, [drinksRecomendation, mealsRecomaendation]);

  return (
    <div>
      {recomandation.map((item, index) => (
        <div key={ index }>
          <img
            data-testid={ `${index}-recomendation-card` }
            src={ item.strDrinkThumb || item.strMealThumb }
            alt="recomendation"
          />
          <p data-testid={ `${index}-recomendation-title` }>
            {item.strDrink || item.strMeal}
          </p>
        </div>
      ))}
    </div>
  );
}
