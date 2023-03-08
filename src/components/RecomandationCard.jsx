import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import AppRecipesContext from '../context/AppRecipesContext';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 463, min: 0 },
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
    <div>
      <Carousel
        responsive={ responsive }
        slidesToSlide={ 2 }
      >
        {recomandation.map((item, index) => (
          <div key={ index } data-testid={ `${index}-recommendation-card` }>
            <img src={ item.strDrinkThumb || item.strMealThumb } alt="recomandations" />
            <h3 data-testid={ `${index}-recommendation-title` }>
              {item.strDrink || item.strMeal }
            </h3>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
