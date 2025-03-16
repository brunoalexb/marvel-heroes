import React from 'react';

function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-red-500">
      <img src="/path-to-marvel-logo.png" alt="Marvel Logo" className="h-10" />
      <div>
        <img
          src="/path-to-search-bar-icon.png"
          alt="Search"
          className="h-8"
        />
      </div>
    </header>
  );
}

export default Header;
