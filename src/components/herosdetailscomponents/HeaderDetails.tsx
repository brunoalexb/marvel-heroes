import React from 'react';
import logo from '../../assets/logo/Group@1,5x.svg';
import lupa from '../../assets/busca/Lupa/Shape@2x.png';

function Header() {
  return (
    <header className="flex items-center justify-center p-4">
      <img src={logo} alt="Marvel Logo" className="h-14 mr-4" />
      <div className="relative w-2/5">
        <input
          type="text"
          className="border-gray-400 text-1xl font-bold p-6 pl-12 rounded-full w-full bg-white focus:outline-none focus:ring-2 focus:ring-red-400"
          placeholder="Procure por heróis"
        />
        <img
          src={lupa}
          alt="Ícone de Busca"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
        />
      </div>
    </header>
  );
}

export default Header;
