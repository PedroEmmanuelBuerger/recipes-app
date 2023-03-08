import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Buttons() {
  const history = useHistory();
  const { location: { pathname } } = history;

  const starRecipeBtn = () => {
    const id = pathname.split('/')[2];
    if (pathname.includes('meals')) {
      return history.push(`/meals/${id}/in-progress`);
    }
    return history.push(`/drinks/${id}/in-progress`);
  };

  return (
    <div>
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="startButton"
        onClick={ starRecipeBtn }
      >
        Start Recipe
      </button>
      <button
        type="button"
      >
        Continue Recipe
      </button>
      <button data-testid="share-btn">
        share recipe
      </button>
      <button data-testid="favorite-btn">
        favorite recipe
      </button>
    </div>
  );
}
