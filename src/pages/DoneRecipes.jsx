import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import shareIcon from '../images/shareIcon.svg';

// Requisito 44 - Implementando os elementos na tela de receitas
export default function DoneRecipes() {
  const history = useHistory();
  const [receitasFeitas, setReceitasFeitas] = useState([]);

  const informs = [{
    id: '52771',
    type: 'drinks',
    nationality: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: 'alcoholic',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    doneDate: ['22/09/2020'],
    tags: ['Pasta', 'Curry'],

  }, {
    id: '52771',
    type: 'drinks',
    nationality: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: 'alcoholic',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
    doneDate: ['22/09/2020'],
    tags: ['Pasta', 'Curry'],
  }];

  useEffect(() => {
    setReceitasFeitas(informs);
  }, []);

  return (
    <div>
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

          <p data-testid={ `${index}-horizontal-name` }>{receita.name}</p>
          <p data-testid={ `${index}-horizontal-top-text` }>
            { receita.type === 'meals'
              ? `${receita.category} - ${receita.nationality}`
              : receita.alcoholicOrNot }
          </p>
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

          <button
            data-testid={ `${index}-horizontal-share-btn` }
            onClick={ () => { console.log('click'); } }
          >

            <img src={ shareIcon } alt="" />
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
