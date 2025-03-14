import React, { useEffect, useState } from "react";
import HeroCard from "./HeroCard";
import { consultar } from "../services/Service";
import Hero from "../models/Character";

function HeroList() {
  const [herois, setHerois] = useState<Hero[]>([]); 

  useEffect(() => {
    consultar("/characters?ts=1&apikey=b03e76a304b21e7f69f815e7c21fcd29&hash=f6a27936ae606f0193e38ea2656383b7", setHerois); 
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {herois.map((heroi) => (
        <HeroCard key={heroi.id} heroi={heroi} /> 
      ))}
    </div>
  );
}

export default HeroList;
