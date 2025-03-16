import React, { useState } from 'react'
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import HeroList from '../../components/HeroList';


function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    console.log("Texto da busca:", query); // Apenas para verificar
    setSearchQuery(query); // Atualiza o estado com a busca
  };

  return (
    <div>
    <Header />
    <HeroList />
  </div>
  )
}

export default Home