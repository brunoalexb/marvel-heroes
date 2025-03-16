import React, { useState } from 'react'
import Header from '../../components/Header';
import HeroList from '../../components/HeroList';
import Footer from '../../components/Footer';


function Home() {
  return (
    <div>
    <Header />
    <HeroList />
    <Footer />
  </div>
  )
}

export default Home