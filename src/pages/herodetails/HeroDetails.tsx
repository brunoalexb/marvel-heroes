import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { consultar } from '../../services/Service';
import Hero from '../../models/Character';
import api from '../../api.config/MarvelApi';
import Footer from '../../components/Footer';
import Character from '../../models/Character';
import HeaderDetails from '../../components/herosdetailscomponents/HeaderDetails';
import ComicsList from '../../components/herosdetailscomponents/ComicsList';
import HeroInfos from '../../components/herosdetailscomponents/HeroInfos';

interface HeroDetailsProps {
  hero: Character;
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
    <>
      <HeaderDetails />
      <div className="p-4">
        <button onClick={() => navigate(-1)} className="text-blue-500 mb-4">
          Voltar
        </button>
        <HeroInfos heroi={heroi} />
        <ComicsList comics={comics} />
      </div>
      <Footer />
    </>
  );
}

export default HeroDetails;