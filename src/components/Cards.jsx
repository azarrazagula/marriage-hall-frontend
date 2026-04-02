import React from "react";
import HallCard from "./HallCard";
import { useHallContext } from "../context/HallContext";

const Cards = () => {
  const { hallsData, openMenuId, toggleMenu, cateringMenu, setSelectedHallId } = useHallContext();
  
  const handleSelectHall = (id) => {
    setSelectedHallId(id);
    document.getElementById('halls-review')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
      {hallsData.map((hall) => (
        <HallCard
          key={hall.id}
          hall={hall}
          isMenuOpen={openMenuId === hall.id}
          onToggleMenu={() => toggleMenu(hall.id)}
          cateringMenu={cateringMenu}
          onSelect={() => handleSelectHall(hall.id)}
        />
      ))}
    </div>
  );
};

export default Cards;
