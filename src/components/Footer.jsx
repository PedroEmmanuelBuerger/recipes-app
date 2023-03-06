import React from 'react';
import '../App.css';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import mealIcon from '../images/mealIcon.svg';

export default function Footer() {
  const history = useHistory();

  const handleClickDrink = () => {
    history.push('/drinks');
  };

  const handleClickMeals = () => {
    history.push('/meals');
  };

  return (
    <footer className="footer" data-testid="footer">
      <button type="button" onClick={ handleClickDrink }>
        <img src={ drinkIcon } data-testid="drinks-bottom-btn" alt="drinks" />
      </button>
      <button type="button" onClick={ handleClickMeals }>
        <img src={ mealIcon } data-testid="meals-bottom-btn" alt="meals" />
      </button>
    </footer>
  );
}
