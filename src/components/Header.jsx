import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header() {
  const [title, setTitle] = useState('');
  const [SearchOk, setSearchOk] = useState(false);
  const history = useHistory();
  const [SearchBar, setSearchBar] = useState(false);

  useEffect(() => {
    const { pathname } = window.location;
    const PathnameWiouthSlash = pathname.slice(1);
    const withFirstLetterMaiuscula = PathnameWiouthSlash
      .charAt(0).toUpperCase() + PathnameWiouthSlash.slice(1);
    setTitle(withFirstLetterMaiuscula);
    if (pathname === '/done-recipes') {
      setTitle('Done Recipes');
    }
    if (pathname === '/favorite-recipes') {
      setTitle('Favorite Recipes');
    }
    if (pathname === '/profile' || pathname === '/done-recipes'
     || pathname === '/favorite-recipes') {
      setSearchOk(true);
    }
  }, [title]);

  const handleClick = () => {
    history.push('/profile');
  };

  const SearchBarClick = () => {
    if (SearchBar === false) {
      return setSearchBar(true);
    }
    return setSearchBar(false);
  };

  return (
    <header>
      <button type="button" onClick={ handleClick }>
        <img src={ profileIcon } data-testid="profile-top-btn" alt="avatar" />
      </button>
      <h1 data-testid="page-title">{ title }</h1>
      { !SearchOk
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
