import React from 'react'


const heroes = [
    { id: 1, name: "Spider-Man", description: "Hero from New York", image: "/images/spiderman.jpg" },
    { id: 2, name: "Iron Man", description: "Genius billionaire", image: "/images/ironman.jpg" },
    // Adicione outros heróis aqui
  ];


function HeroDetails() {

  return (
    <div className="p-4">
    <button className="text-blue-500 mb-4">Voltar</button>
    <div className="flex gap-4">
      <div className="w-1/3 h-80 bg-gray-300 rounded-lg"></div>
      <div>
        <h1 className="text-2xl font-bold">Nome do Herói</h1>
        <p className="mt-2">Descrição do herói aparece aqui.</p>
      </div>
    </div>
  </div>
  )
}

export default HeroDetails