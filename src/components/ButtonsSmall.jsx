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

  const shareRecipeBtn = () => {
    const url = (`http://localhost:3000${pathname}`);
    const urlWithoutInPRogress = url.replace('/in-progress', '');
    copy(urlWithoutInPRogress);
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
      {share && <h2>Link copied!</h2>}
      <button data-testid="share-btn" onClick={ shareRecipeBtn }>
        <img src={ shareIcon } alt="share" />
      </button>
      <button onClick={ saveFavorites }>
        <img src={ icon } alt="favorite" data-testid="favorite-btn" />
      </button>
    </div>
  );
}
