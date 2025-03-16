import React from 'react';
import Hero from '../../models/Character';

interface HeroInfosProps {
  heroi: Hero;
}

function HeroInfos({ heroi }: HeroInfosProps) {
  return (
    <div className="flex gap-8 items-center p-4">
      <div>
        <img
          src={`${heroi.thumbnail.path}.${heroi.thumbnail.extension}`}
          alt={heroi.name}
          className="w-80 h-auto rounded-lg"
        />
      </div>
      <div>
        <h1 className="text-5xl font-bold mb-2">{heroi.name}</h1>
        <p className="text-lg text-gray-700 mb-4">
          {heroi.description || 'Descrição não disponível.'}
        </p>
        <div className="space-y-2">
          <p className="flex items-center gap-2">
            <img src="/path-to-comics-icon.png" alt="Comics Icon" className="h-6" />
            <span><strong>Quadrinhos:</strong> {heroi.comics.available}</span>
          </p>
          <p className="flex items-center gap-2">
            <img src="/path-to-movies-icon.png" alt="Movies Icon" className="h-6" />
            <span><strong>Filmes:</strong> {heroi.series.available}</span>
          </p>
          <p className="flex items-center gap-2">
            <img src="/path-to-rating-icon.png" alt="Rating Icon" className="h-6" />
            <span><strong>Rating:</strong> 5 estrelas</span>
          </p>
          <p>
            <strong>Último quadrinho:</strong> 13 fev. 2020
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroInfos;
