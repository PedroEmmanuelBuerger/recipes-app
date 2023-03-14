import React, { useState } from 'react';
import copy from 'clipboard-copy';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';

export default function DoneRecipes() {
  const [share, setShare] = useState(false);
  const [typeFood, setTypeFood] = useState('');

  const receitasFeitas = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  console.log(receitasFeitas);
  const shareRecipeBtn = (receita) => {
    const url = `http://localhost:3000/${receita.type}/${receita.id}`;
    const urlWithoutInProgress = url.replace('/in-progress', '');
    copy(urlWithoutInProgress);
    setShare(true);
  };

  const filtraTipos = (type) => {
    receitasFeitas.filter((receita) => receita.type === type);
    setTypeFood(type === 'all' ? '' : type);
    console.log(filtros);
  };

  return (
    <>
      <Header />
      <section>
        <button
          name="all"
          data-testid="filter-by-all-btn"
          onClick={ () => filtraTipos('all') }
        >
          All
        </button>
        <button
          name="meal"
          data-testid="filter-by-meal-btn"
          onClick={ () => filtraTipos('meal') }
        >
          Meals
        </button>
        <button
          name="drink"
          data-testid="filter-by-drink-btn"
          onClick={ () => filtraTipos('drink') }
        >
          Drinks
        </button>
      </section>

      {receitasFeitas
        .filter((receita) => receita.type.includes(typeFood))
        .map((receita, index) => (
          <div key={ index }>
            <img
              data-testid={ `${index}-horizontal-image` }
              src={ receita.image }
              alt={ receita.name }
            />
            <h4 data-testid={ `${index}-horizontal-top-text` }>
              {receita.type === 'drink'
                ? receita.alcoholicOrNot
                : null}
              {`${receita.area} - ${receita.category}`}
            </h4>

            <h5 data-testid={ `${index}-horizontal-name` }>
              {receita.name}
            </h5>

            <p data-testid={ `${index}-horizontal-done-date` }>
              {receita.doneDate}
            </p>

            {receita.type === 'meal'
              && receita.tags.map((tag, indice) => (
                <span
                  data-testid={ `${index}-${tag}-horizontal-tag` }
                  key={ indice }
                >
                  {tag}
                </span>
              ))}

            {share && <h2>Link copied!</h2>}
            <button onClick={ () => shareRecipeBtn(receita) }>
              <img
                src={ shareIcon }
                alt="imagem ícone"
                data-testid={ `${index}-horizontal-share-btn` }
              />
              Compartilhar
            </button>

            <button
              data-testid={ `${index}-horizontal-favorite-btn` }
              onClick={ () => {
                console.log('click');
              } }
            >
              Favorite
            </button>
          </div>
        ))}
    </>
  );
}
