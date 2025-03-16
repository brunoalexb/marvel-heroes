import React, { useState } from "react";
import favoritar from '../assets/icones/heart/Path.svg';
import ordenar from '../assets/toggle/Group 2.svg';
import heroi from '../assets/icones/heroi/noun_Superhero_2227044@1,5x.svg';


export default function HeroFilter({ onSortChange, showFavorites, onFavoritesToggle }) {
  const [isFavoriteOnly, setIsFavoriteOnly] = useState(showFavorites || false);

  const handleSortChange = () => {
    if (onSortChange) {
      onSortChange();
    }
  };

  const handleFavoritesToggle = () => {
    setIsFavoriteOnly(!isFavoriteOnly);
    if (onFavoritesToggle) {
      onFavoritesToggle(!isFavoriteOnly);
    }
  };

  return (
    <div className="flex items-center justify-center py-4 px-6 bg-white rounded-lg ml-170">
      <div className="flex items-center space-x-2">
        <img
          src={heroi} 
          alt="Ordenar"
          className="w-5 h-5"
        />
        <p className="text-sm font-semibold text-gray-700">Ordenar por nome - A/Z</p>
      </div>

      <div className="flex items-center space-x-4">
       
        <button
          onClick={handleSortChange}
          className="flex items-center p-6 focus:outline-none transition duration-300 ease-in-out transform hover:scale-105"
          title="Clique para ordenar"
        >
          <img
            src={ordenar} 
            alt="Ordenar"
            className="w-18 h-10 cursor-pointer"
          />
        </button>

        {/* Botão de Somente Favoritos */}
        <button
          onClick={handleFavoritesToggle}
          className={`flex items-center px-3 py-2 text-red-600 border cursor-pointer ${
            isFavoriteOnly ? "bg-red-50" : "border-red-600"
          } rounded-md hover:bg-red-50 focus:outline-none`}
        >
          <img
            src={
              isFavoriteOnly
                ? favoritar
                : favoritar
            } 
            alt="Favoritos"
            className="w-5 h-5 mr-2 cursor-pointer"
          />
          <span>Somente favoritos</span>
        </button>
      </div>
    </div>
  );
}
