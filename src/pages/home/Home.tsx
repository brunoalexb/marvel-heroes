import React, { useState } from 'react'
import Header from '../../components/Header';
import SearchBar from '../../components/SearchBar';
import HeroList from '../../components/HeroList';


function Home() {

  return (
    <div>
    <Header />
    <SearchBar />
    <HeroList />
  </div>
  )
}

export default Home