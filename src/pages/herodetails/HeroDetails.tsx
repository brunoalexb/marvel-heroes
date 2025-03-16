import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { consultar } from '../../services/Service';
import Hero from '../../models/Character';
import api from '../../api.config/MarvelApi';
import Footer from '../../components/Footer';
import Character from '../../models/Character';

interface HeroDetailsProps {
  heroi: Character;
}

function HeroDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [heroi, setHeroi] = useState<Hero | null>(null);
  const [comics, setComics] = useState([]);

  useEffect(() => {
    const { ts, apikey, hash } = api.defaults.params;

    // Obter detalhes do herói
    consultar(`/characters/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`, (data) => {
      setHeroi(data[0]);
    });

    // Obter últimos 10 quadrinhos
    consultar(`/characters/${id}/comics?ts=${ts}&apikey=${apikey}&hash=${hash}&orderBy=-onsaleDate&limit=10`, (data) => {
      setComics(data);
    });
  }, [id]);

  if (!heroi) return <div>Carregando...</div>;

  return (
    <div className="p-4">
      <button onClick={() => navigate(-1)} className="text-blue-500 mb-4">
        Voltar
      </button>
      <div className="flex gap-4">
        <div>
          <img 
            src={`${heroi.thumbnail.path}.${heroi.thumbnail.extension}`} 
            alt={heroi.name} 
            className="w-80 h-auto rounded-lg"
          />
        </div>
        <div>
          <h1 className="text-4xl font-bold">{heroi.name}</h1>
          <p className="mt-2">{heroi.description || "Descrição não disponível."}</p>
          <div className="mt-4">
            <p><strong>Quadrinhos:</strong> {heroi.comics.available}</p>
            <p><strong>Filmes:</strong> {heroi.series.available}</p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-8">Últimos lançamentos</h2>
      <div className="grid grid-cols-5 gap-4 mt-4">
        {comics.map((comic: any) => (
          <div key={comic.id} className="border p-2 rounded-lg bg-gray-100">
            <img 
              src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} 
              alt={comic.title} 
              className="w-full h-40 object-cover rounded-md"
            />
            <h3 className="mt-2 text-sm font-semibold">{comic.title}</h3>
          </div>
        ))}
      </div>

      <Footer/>
    </div>
    
  );
}

export default HeroDetails;