import React, { useState, useEffect } from 'react';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

export default function Header() {
  const [title, setTitle] = useState('');
  const [SearchOk, setSearchOk] = useState(false);

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

  return (
    <header>
      <img src={ profileIcon } alt="avatar" data-testid="profile-top-btn" />
      <h1 data-testid="page-title">{ title }</h1>
      { !SearchOk && <img
        src={ searchIcon }
        alt="search"
        data-testid="search-top-btn"
      /> }
    </header>
  );
}
