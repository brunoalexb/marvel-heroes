import React, { useState } from 'react'
import lupa from '../assets/busca/Lupa/Shape@2x.png';

interface SearchBarProps {
  onSearch: (query: string) => void; // Callback para passar a pesquisa
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    onSearch(value); // Chama a função de callback ao alterar o valor
  };

  return (
    <div className="p-6 flex flex-col items-center text-center">
      <h1 className="text-4xl font-bold text-black mb-2">EXPLORE O UNIVERSO</h1>
      <p className="text-gray-500 mb-14">
        Mergulhe no domínio deslumbrante de todos os personagens clássicos que
        você ama - e aqueles que você descobrirá em breve.
      </p>
      <div className="relative w-2/5">
        <input
          type="text"
          className="border-gray-400 text-2xl text-red-500 font-bold p-6 pl-12 rounded-full w-full bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-400"
          placeholder="Procure por heróis"
          value={searchTerm}
          onChange={handleInputChange} 
        />
        <img
          src={lupa}
          alt="Ícone de Busca"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-6 h-6"
        />
      </div>
    </div>
  );
}

export default SearchBar;