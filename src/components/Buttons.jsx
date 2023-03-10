import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import copy from 'clipboard-copy';
import shareIcon from '../images/shareIcon.svg';
import AppRecipesContext from '../context/AppRecipesContext';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

export default function Buttons() {
  const { detailRecipe } = useContext(AppRecipesContext);
  const history = useHistory();
  const { location: { pathname } } = history;

  const [icon, setIcon] = useState('');
  const [share, setShare] = useState(false);
  const [done, setDone] = useState(false);
  const [btnText, setBtnText] = useState('Start Recipe');

  const starRecipeBtn = () => {
    const id = pathname.split('/')[2];
    if (pathname.includes('meals')) {
      return history.push(`/meals/${id}/in-progress`);
    }
    return history.push(`/drinks/${id}/in-progress`);
  };

  const verifyButtons = () => {
    const localStorageDone = JSON.parse(localStorage.getItem('doneRecipes')) || [];
    const namePath = pathname.includes('meals') ? 'meals' : 'drinks';
    const id = pathname.split('/')[2];
    const isDone = localStorageDone?.some((item) => item.id === id);
    setDone(!isDone);
    const localStorageProgress = JSON
      .parse(localStorage.getItem('inProgressRecipes')) || {};
    const categoryLocal = localStorageProgress[namePath] || [];
    const actualIdCategory = categoryLocal[id];
    console.log(actualIdCategory);
    if (actualIdCategory) {
      console.log('entrou');
      return setBtnText('Continue Recipe');
    }
    setBtnText('Start Recipe');
  };

  const shareRecipeBtn = () => {
    copy(`http://localhost:3000${pathname}`);
    setShare(true);
  };

  const saveFavorites = () => {
    const oldFavorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    if (icon === whiteHeartIcon) {
      setIcon(blackHeartIcon);
      const id = detailRecipe.idMeal || detailRecipe.idDrink;
      const type = pathname.includes('meals') ? 'meal' : 'drink';
      const nationality = detailRecipe.strArea || '';
      const category = detailRecipe.strCategory;
      const alcoholicOrNot = detailRecipe.strAlcoholic || '';
      const name = detailRecipe.strMeal || detailRecipe.strDrink;
      const image = detailRecipe.strMealThumb || detailRecipe.strDrinkThumb;
      const obj = {
        id,
        type,
        nationality,
        category,
        alcoholicOrNot,
        name,
        image,
      };
      const newFavorites = [...oldFavorites, obj];
      return localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
    }
    setIcon(whiteHeartIcon);
    const newFavorites = oldFavorites.filter((item) => item.id !== detailRecipe.idMeal);
    return localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorites));
  };

  useEffect(() => {
    verifyButtons();
    const id = pathname.split('/')[2];
    const favorites = JSON.parse(localStorage.getItem('favoriteRecipes')) || [];
    const isFavorite = favorites.some((item) => item.id === id);
    if (isFavorite) {
      return setIcon(blackHeartIcon);
    }
    return setIcon(whiteHeartIcon);
  }, []);

  return (
    <div style={ { padding: 30 } }>
      {share && <h2>Link copied!!</h2>}
      {done && (
        <button
          type="button"
          data-testid="start-recipe-btn"
          className="startButton"
          onClick={ starRecipeBtn }
        >
          {btnText}
        </button>
      )}
      <button data-testid="share-btn" onClick={ shareRecipeBtn }>
        <img src={ shareIcon } alt="share" />
      </button>
      <button onClick={ saveFavorites }>
        <img src={ icon } alt="favorite" data-testid="favorite-btn" />
      </button>
    </div>
  );
}
