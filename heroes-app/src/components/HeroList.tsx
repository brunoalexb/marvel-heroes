import React, { useEffect, useState } from 'react'
import HeroCard from './HeroCard'
import { consultar } from '../services/Service'

function HeroList() {

  const [herois, setHerois] = useState([])

  useEffect(() => {
    consultar(setHerois) // Chama a função consultar para obter os dados
  }, [])

  return (
  <div className="grid grid-cols-4 gap-4 p-4">
      {herois.map((heroi) => (
        <HeroCard key={heroi.id} heroi={heroi} /> // Passa os dados de cada herói para o HeroCard
      ))}
    </div>
  )
}

export default HeroList