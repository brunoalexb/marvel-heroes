import React from 'react'
import logo from '../assets/logo/Group@2x.png';

function Header() {
  return (
    <header className="text-white p-4 flex justify-center items-center">
    <div className="flex flex-col items-center">
      <img src={logo} alt="Marvel Search Logo" className="h-30 mb-2" /> {/* Ajuste a altura e margem conforme necessário */}
      <span className="text-lg">Explore o Universo</span>
    </div>
  </header>
  )
}

export default Header