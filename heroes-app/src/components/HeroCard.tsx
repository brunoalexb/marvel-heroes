import React from 'react'

function HeroCard({ heroi }: { heroi: any }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="text-lg font-semibold">{heroi.name}</h3>
      <img src={`${heroi.thumbnail.path}.${heroi.thumbnail.extension}`} alt={heroi.name} className="w-full h-auto" />
      <p>{heroi.description ? heroi.description : 'No description available.'}</p>
    </div>
  )
}

export default HeroCard


