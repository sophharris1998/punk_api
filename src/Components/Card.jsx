import React from "react";
import "./Card.scss";

const Card = ({ name, image, abv, first_brewed, description }) => {
  return (
    <div className="beer-card" key={name}>
      <img className="beer-card__image" src={image} alt={name} />
      <div className="beer-card__content">
        <h2 className="beer-card__heading"> {name} </h2>
        <h3 className="beer-card__firstBrewed">First Brewed: {first_brewed}</h3>
        <h3 className="beer-card__abv">Abv: {abv} </h3>
      </div>
    </div>
  );
};

export default Card;
