import React, { useEffect, useState } from "react";
import HeroCard from "./HeroCard";
import { consultar } from "../services/Service";
import Hero from "../models/Character";
import api from "../api.config/MarvelApi";
import SearchBar from "./SearchBar";
import HeroFilter from "./HeroFilter";

function HeroList() {
  const [herois, setHerois] = useState<Hero[]>([]);
  const [filteredHerois, setFilteredHerois] = useState<Hero[]>([]);
  const [showFavorites, setShowFavorites] = useState(false);

  
  useEffect(() => {
    const { ts, apikey, hash } = api.defaults.params;
    consultar(`/characters?ts=${ts}&apikey=${apikey}&hash=${hash}`, (data) => {

      const heroisComFavoritos = data.map((heroi: Hero) => ({ ...heroi, isFavorite: false }));
      setHerois(heroisComFavoritos);
      setFilteredHerois(heroisComFavoritos);
    });
  }, []);

  // Função para realizar a busca de heróis
  const handleSearch = (query: string) => {
    const lowerCaseQuery = query.toLowerCase();
    const filtered = herois.filter((heroi) =>
      heroi.name.toLowerCase().includes(lowerCaseQuery)
    );
    setFilteredHerois(filtered);
  };

  // Função para alternar favoritos
  const toggleFavorite = (heroId: number) => {
    const updatedHerois = herois.map((heroi) =>
      heroi.id === heroId ? { ...heroi, isFavorite: !heroi.isFavorite } : heroi
    );
    setHerois(updatedHerois);

    // Atualiza a lista filtrada dependendo do filtro de favoritos
    const filtered = showFavorites
      ? updatedHerois.filter((heroi) => heroi.isFavorite)
      : updatedHerois;
    setFilteredHerois(filtered);
  };

  // Função para alternar a exibição de favoritos
  const handleFavoritesToggle = (favoritesOnly: boolean) => {
    setShowFavorites(favoritesOnly);
    if (favoritesOnly) {
      const favoritos = herois.filter((heroi) => heroi.isFavorite);
      setFilteredHerois(favoritos);
    } else {
      setFilteredHerois(herois);
    }
  };

  // Função para ordenar os heróis
  const handleSortChange = () => {
    const sorted = [...filteredHerois].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setFilteredHerois(sorted);
  };

  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      <HeroFilter
        onSortChange={handleSortChange}
        showFavorites={showFavorites}
        onFavoritesToggle={handleFavoritesToggle}
      />
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-16 p-4">
          {filteredHerois.map((heroi) => (
            <HeroCard 
              key={heroi.id} 
              heroi={heroi} 
              isFavorited={heroi.isFavorite}
              onFavoriteToggle={() => toggleFavorite(heroi.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default HeroList;
