import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function Profile() {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user'));
  const { email } = user;

  const handleClick = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <Header />

      <span data-testid="profile-email">
        { email }
      </span>
      <br />
      <br />
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ () => history.push('/done-recipes') }
      >
        Done Recipes
      </button>
      <br />
      <br />
      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ () => history.push('/favorite-recipes') }
      >
        Favorite Recipes
      </button>
      <br />
      <br />
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ handleClick }
      >
        Logout
      </button>
      <Footer />
    </div>
  );
}
