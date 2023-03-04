import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header() {
  const [title, setTitle] = useState('');
  const [SearchOk, setSearchOk] = useState(true);
  const history = useHistory();
  const [SearchBar, setSearchBar] = useState(false);
  const { pathname } = history.location;

  const verifyPathName = () => {
    if (pathname === '/done-recipes' || pathname
     === '/favorite-recipes' || pathname === '/profile') {
      setSearchOk(false);
    }
    let titles = '';
    switch (pathname) {
    case '/meals':
      titles = 'Meals';
      break;
    case '/drinks':
      titles = 'Drinks';
      break;
    case '/profile':
      titles = 'Profile';
      break;
    case '/done-recipes':
      titles = 'Done Recipes';
      break;
    case '/favorite-recipes':
      titles = 'Favorite Recipes';
      break;
    default:
      titles = 'Recipes App';
    }
    setTitle(titles);
  };

  useEffect(() => {
    verifyPathName();
  }, [title, SearchOk]);

  const SearchBarClick = () => {
    if (SearchBar === false) {
      return setSearchBar(true);
    }
    return setSearchBar(false);
  };

  const handleClick = () => {
    history.push('/profile');
  };

  return (
    <header>
      <button type="button" onClick={ handleClick }>
        <img src={ profileIcon } data-testid="profile-top-btn" alt="avatar" />
      </button>
      <h1 data-testid="page-title">
        { title }
      </h1>
      { SearchOk
      && (
        <button type="button" onClick={ SearchBarClick }>
          <img
            src={ searchIcon }
            alt="search"
            data-testid="search-top-btn"
          />
        </button>
      ) }
      { SearchBar && <input type="text" data-testid="search-input" /> }
    </header>
  );
}
