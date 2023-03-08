import React from 'react';

export default function Buttons() {
  return (
    <div>
      <button
        type="button"
        data-testid="start-recipe-btn"
        className="startButton"
      >
        Start Recipe
      </button>
      <button
        type="button"
      >
        Continue Recipe
      </button>
    </div>
  );
}
