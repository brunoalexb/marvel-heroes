import React from 'react';
import Hero from '../../models/Character';
import video from '../../assets/icones/video/Shape@1,5x.svg';
import book from '../../assets/icones/book/Group@1,5x.svg';
import review from '../../assets/review/Group 4@1,5x.svg';

interface HeroInfosProps {
  heroi: Hero;
}

function HeroInfos({ heroi }: HeroInfosProps) {
  return (
    <div className="flex gap-8 items-center p-4 ml-70">
      <div className="mt-[-400px] max-w-lg">
        <h1 className="text-5xl font-bold mb-4">{heroi.name}</h1>
        <p className="text-lg text-gray-700 mb-4 break-words">
          {heroi.description || 'Descrição não disponível.'}
        </p>
        <div className="space-y-2">
          <div className="flex items-center gap-8 mb-2">
            <p className="flex items-center gap-2">
              <img src={book} alt="Comics Icon" className="h-6" />
              <span><strong>Quadrinhos:</strong> {heroi.comics.available}</span>
            </p>
            <p className="flex items-center gap-2">
              <img src={video} alt="Movies Icon" className="h-6" />
              <span><strong>Filmes:</strong> {heroi.series.available}</span>
            </p>
          </div>
          <p className="flex items-center gap-2 mb-2">
            <span><strong>Rating:</strong></span>
            <img src={review} alt="Rating Icon" className="h-6" />
          </p>
          <p>
            <strong>Último quadrinho:</strong> 13 fev. 2020
          </p>
        </div>
      </div>
      <div className="flex gap-8 items-center p-4 ml-80">
        <img
          src={`${heroi.thumbnail.path}.${heroi.thumbnail.extension}`}
          alt={heroi.name}
          className="w-120 h-170 rounded-lg"
        />
      </div>
    </div>
  );
}


export default HeroInfos;
