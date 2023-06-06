import React from 'react';
import './style.css';

function Header() {
  const title = '< Pedro />';

  return (
    <header className="header-container">
      <h1 className="header-title"> { title } </h1>
    </header>
  );
}

export default Header;
