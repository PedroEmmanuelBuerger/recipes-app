import React, { useContext } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Recipes from '../components/Recipes';
import SearchResults from '../components/SearchResults';
import AppRecipesContext from '../context/AppRecipesContext';

export default function Meals() {
  const { searched } = useContext(AppRecipesContext);
  return (
    <div>
      <Header />
      { searched ? <SearchResults /> : <Recipes /> }
      <Footer />
    </div>
  );
}
