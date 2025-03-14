import React from 'react'
import lupa from '../assets/busca/Lupa/Shape@2x.png';

function SearchBar() {
  return (
    <div className="p-6 flex flex-col items-center text-center">
      {/* Título grande com cor preta */}
      <h1 className="text-4xl font-bold text-black mb-2">EXPLORE O UNIVERSO</h1>
      
      {/* Descrição com tom de cinza mais claro */}
      <p className="text-gray-500 mb-14">
        Mergulhe no domínio deslumbrante de todos os personagens clássicos que você ama - 
        e aqueles que você descobrirá em breve.
      </p>
      
      {/* Barra de pesquisa com bordas arredondadas, maior e tom vermelho claro */}
      <div className="relative w-2/5">
        <input
          type="text"
          className="border-gray-400 p-6 pl-12 rounded-full w-full bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-400"
          placeholder="Procure por heróis"
        />
        {/* Ícone da lupa */}
        <img 
          src={lupa} 
          alt="Ícone de Busca" 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
        />
      </div>
    </div>
  )
}

export default SearchBar