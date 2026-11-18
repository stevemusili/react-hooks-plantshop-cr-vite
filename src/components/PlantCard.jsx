import React, { useState } from "react";

function PlantCard({ plant }) {
  const [soldOut, setSoldOut] = useState(false);

  function handleClick() {
    setSoldOut((previousState) => !previousState);
  }
  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} className="plant-image" />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button 
        className={soldOut ? "" : "primary"}
        onClick={handleClick}
      >
        {soldOut ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
