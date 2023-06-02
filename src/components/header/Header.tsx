import React from 'react';
import Contacts from './Contacts';
import './style.css';

function Header() {
  const title = '< Pedro />';

  return (
    <header className="header-container">
      <h1 className="header-title"> { title } </h1>
      <Contacts />
    </header>
  );
}

export default Header;
