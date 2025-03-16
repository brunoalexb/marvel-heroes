import React from 'react';
import Character from '../models/Character';
import coracaovazio from '../assets/icones/heart/Path Copy 2@1,5x.svg';
import coracaopreenchido from '../assets/icones/heart/Path.svg';

interface HeroCardProps {
  heroi: Character;
  isFavorited: boolean;
  onFavoriteToggle: (id: number) => void;
}

function HeroCard({ heroi, isFavorited, onFavoriteToggle }: HeroCardProps) {
  return (
    <div className="bg-white p-4 rounded w-64 cursor-pointer">
      <div className="w-full h-64 overflow-hidden rounded">
        <img
          src={`${heroi.thumbnail.path}.${heroi.thumbnail.extension}`}
          alt={heroi.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex justify-between items-center mt-2">
        <h3 className="text-lg font-semibold">{heroi.name}</h3>
        <button
          onClick={() => onFavoriteToggle(heroi.id)}
          aria-label={isFavorited ? 'Desfavoritar' : 'Favoritar'}
          className="text-red-500 cursor-pointer"
        >
          <img
            src={isFavorited ? coracaopreenchido : coracaovazio}
            alt={isFavorited ? 'Favorito' : 'Não favoritado'}
            className="w-6 h-6"
          />
        </button>
      </div>
    </div>
  );
}

export default HeroCard;
