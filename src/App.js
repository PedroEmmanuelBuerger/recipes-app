import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Meals from './pages/Meals';
import Drinks from './pages/Drinks';
import Profile from './pages/Profile';
import DoneRecipes from './pages/DoneRecipes';
import FavoriteRecipes from './pages/FavoriteRecipes';
import DrinkDetails from './pages/DrinkDetails';
import MealsDetails from './pages/MealsDetails';
import RecipeInProgress from './pages/RecipeInProgress';
import './App.css';

function App() {
  return (
    <Switch>
      <Route
        path="/drinks/:id/in-progress"
        component={ RecipeInProgress }
      />
      <Route
        path="/meals/:id/in-progress"
        component={ RecipeInProgress }
      />
      <Route path="/drinks/:id" component={ DrinkDetails } />
      <Route path="/meals/:id" component={ MealsDetails } />
      <Route path="/meals" component={ Meals } />
      <Route path="/drinks" component={ Drinks } />
      <Route path="/profile" component={ Profile } />
      <Route path="/done-recipes" component={ DoneRecipes } />
      <Route path="/favorite-recipes" component={ FavoriteRecipes } />
      <Route exact path="/" component={ Login } />
    </Switch>
  );
}

export default App;
