import React, { useState } from 'react';
// import { useHistory } from ‘react-router-dom’;
import copy from 'clipboard-copy';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';

// Requisito 44 - Implementando os elementos na tela de receitas
// O useHistory fornece acesso à history que vocÊ pode usar para navegar
export default function DoneRecipes() {
  const [share, setShare] = useState(false);

  const receitasFeitas = JSON.parse(localStorage.getItem('doneRecipes')) || [];
  console.log(receitasFeitas);
  const shareRecipeBtn = (receita) => {
    const url = `http://localhost:3000/meals/${receita.id}` || `http://localhost:3000/drinks/${receita.id}`;
    const urlWithoutInPRogress = url.replace('/in-progress', '');
    copy(urlWithoutInPRogress);
    setShare(true);
  };
  // Requisito 48
  const filtraPorTipo = (filter) => {
    if (filter === 'all') return setShare(receitasFeitas);
    const filterType = receitasFeitas.filter((recipes) => recipes.type === filter);
    setShare(filterType);
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <section>
          <button
            name="all"
            data-testid="filter-by-all-btn"
            onClick={ () => filtraPorTipo('all') }
          >
            All
          </button>
          <button
            name="meal"
            data-testid="filter-by-meal-btn"
            onClick={ () => filtraPorTipo('meal') }
          >
            Meals
          </button>
          <button
            name="drink"
            data-testid="filter-by-drink-btn"
            onClick={ () => filtraPorTipo('drink') }
          >
            Drinks
          </button>

        </section>
        {receitasFeitas.map((receita, index) => (
          <div
            key={ index }
          >
            <img
              data-testid={ `${index}-horizontal-image` }
              src={ receita.image }
              alt={ receita.name }
            />
            <h4 data-testid={ `${index}-horizontal-top-text` }>
              {receita.type === 'drink'
                ? receita.alcoholicOrNot : null }
              {`${receita.nationality} -
            ${receita.category}`}
            </h4>

            <h5 data-testid={ `${index}-horizontal-name` }>
              {receita.name}
            </h5>

            <p data-testid={ `${index}-horizontal-done-date` }>{ receita.doneDate}</p>
            {/* <button onClick={ () => shareLink(receita.id, receita.type) }> */}
            {receita.doneDate}

            {receita.type === 'meal'
              ? receita.tags.map((tag, indice) => (
                <span
                  data-testid={ `${index}-${tag}-horizontal-tag` }
                  key={ indice }
                >
                  {tag}
                  {' '}
                </span>))
              : null}
            {share && <h2>Link copied!</h2>}
            <button
              onClick={ () => shareRecipeBtn(receita) }
            >
              Compartilhar
              <img
                src={ shareIcon }
                alt="imagem ícone"
                data-testid={ `${index}-horizontal-share-btn` }
              />
            </button>

            <button
              data-testid={ `${index}-horizontal-favorite-btn` }
              onClick={ () => { console.log('click'); } }
            >
              Favorite
            </button>
          </div>
        ))}
      </div>
    </>
  );
}
