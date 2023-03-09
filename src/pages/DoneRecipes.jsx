import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';

// Requisito 44 - Implementando os elementos na tela de receitas
// O useHistory fornece acesso à history que você pode usar para navegar
export default function DoneRecipes() {
  const history = useHistory();
  const path = history.location.pathname;
  console.log(path);
  const [receitasFeitas, setReceitasFeitas] = useState([]);

  const informs = [{
    id: '52771',
    type: 'drinks',
    nationality: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: 'alcoholic',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    doneDate: ['23/06/2020'],
    tags: ['Pasta', 'Curry'],

  }, {
    id: '52771',
    type: 'drinks',
    nationality: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: 'alcoholic',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    doneDate: ['23/06/2020'],
    tags: ['Pasta', 'Curry'],
  }];

  useEffect(() => {
    setReceitasFeitas(informs);
  }, []);

  return (
    <div>
      <Header />
      <Header pathName={ history.location.pathname } searchIcon={ false } />
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
            src={ receita.image }
            alt={ receita.name }
            data-testid={ `${index}-horizontal-image` }
          />

          <h5 data-testid={ `${index}-horizontal-top-text` }>
            {' '}
            {`${receita.nationality} -
            ${receita.category}`}

          </h5>

          <h5 data-testid={ `${index}-horizontal-name` }>

            {receita.name}

          </h5>

          {/* { receita.type === 'meals' */}
          {/* ? `${receita.category} - ${receita.nationality}`
              : `${receita.alcoholicOrNot}`  */}

          {/* </p> */}
          {console.log(receita)}

          <p data-testid={ `${index}-horizontal-done-date` }>
            {receita.doneDate}
          </p>
          { receita.type === 'drinks'
            ? receita.tags.map((tag, indice) => (
              <span
                data-testid={ `${index}-${tag}-horizontal-tag` }
                key={ indice }
              >
                {tag}
                {' '}

              </span>))
            : null }

          <button>

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

  );
}
