import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AppReceitasContext from '../context/AppReceitasContext';

function SearchResults() {
  const history = useHistory();
  const { buscaPorBebida, buscaPorComida } = useContext(AppReceitasContext);
  const { meals } = buscaPorComida;
  const { drinks } = buscaPorBebida;
  const qtd = 11;
  const messageAlert = 'Sorry, we haven\'t found any recipes for these filters.';

  if (meals === null || drinks === null) {
    return global.alert(messageAlert);
  }

  if (meals && meals.length === 1) return history.push(`/meals/${meals[0].idMeal}`);
  if (drinks && drinks.length === 1) return history.push(`/drinks/${drinks[0].idDrink}`);
  if (history.location.pathname === '/meals') {
    return (
      <div>
        {meals && meals.map((meal, index) => (index <= qtd ? (
          <Link to={ `/meals/${meal.idMeal}` } key={ index }>
            <div data-testid={ `${index}-recipe-card` }>
              <img
                data-testid={ `${index}-card-img` }
                src={ meal.strMealThumb }
                alt={ meal.strMeal }
              />
              <p data-testid={ `${index}-card-name` }>
                { meal.strMeal }
              </p>
            </div>
          </Link>) : null))}
      </div>
    );
  }
  if (history.location.pathname === '/drinks') {
    return (
      <div>
        {drinks && drinks.map((drink, index) => (index <= qtd ? (
          <Link to={ `/drinks/${drink.idDrink}` } key={ index }>
            <div data-testid={ `${index}-recipe-card` }>
              <img
                data-testid={ `${index}-card-img` }
                src={ drink.strDrinkThumb }
                alt={ drink.strDrink }
              />
              <p data-testid={ `${index}-card-name` }>
                { drink.strDrink }
              </p>
            </div>
          </Link>) : null))}
      </div>
    );
  }
}
export default SearchResults;
