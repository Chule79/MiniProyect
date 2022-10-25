import React from "react";

export const Card = (props) => {
  const { character } = props;

  return (
    <div key={character.id} className="caja">
          <h2>Nombre: {character.name}</h2>
          <img src={character.image}></img>
          <h2>Estado: {character.status}</h2>
          <h2>Genero: {character.gender}</h2>
          <h2>Hogar: {character.location.name}</h2>
    </div>
  );
};

export default Card;