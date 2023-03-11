import React, { useState } from 'react';
// import { useHistory } from ‘react-router-dom’;
import copy from 'clipboard-copy';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';

// Requisito 44 - Implementando os elementos na tela de receitas
// O useHistory fornece acesso à history que vocÊ pode usar para navegar
export default function DoneRecipes() {
  const [share, setShare] = useState(false);
  // const history = useHistory();
  // const { location: { pathname } } = history;
  const receitasFeitas = JSON.parse(localStorage.getItem('doneRecipes') || '{}');
  console.log(receitasFeitas);
  const shareRecipeBtn = (receita) => {
    const url = `http://localhost:3000/meals/${receita.id}` || `http://localhost:3000/drinks/${receita.id}`;
    const urlWithoutInPRogress = url.replace('/in-progress', '');
    copy(urlWithoutInPRogress);
    setShare(true);
  };
  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        <section>
          <button
            data-testid="filter-by-all-btn"
            onClick={ () => { console.log(receitasFeitas); } }
          >
            All
          </button>
          <button
            data-testid="filter-by-meal-btn"
            onClick={ () => { console.log('click'); } }
          >
            Meals
          </button>
          <button
            data-testid="filter-by-drink-btn"
            onClick={ () => { console.log('click'); } }
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
            <p data-testid={ `${index}-horizontal-done-date` }>
              {receita.doneDate}
            </p>
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
