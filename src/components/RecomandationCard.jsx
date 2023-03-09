import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AliceCarousel from 'react-alice-carousel';
import AppRecipesContext from '../context/AppRecipesContext';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
  0: {
    items: 2,
  },
  1024: {
    items: 2,
  },
};

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
    <AliceCarousel items={ recomandation } responsive={ responsive }>
      {recomandation.map((item, index) => (
        <div key={ index } data-testid={ `${index}-recommendation-card` }>
          <img src={ item.strDrinkThumb || item.strMealThumb } alt="recomandation" />
          <h2 data-testid={ `${index}-recommendation-title` }>
            {item.strDrink || item.strMeal}
          </h2>
        </div>
      ))}
    </AliceCarousel>
  );
}
