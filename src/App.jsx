import React from "react";
import "./App.css";

const App = () => {
  const [characterList, setCharacterList] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      let data = await fetch(`https://rickandmortyapi.com/api/character/`).then(
        (res) => res.json()
      );

      setCharacterList(data.results);
    })();
  }, []);

  return (
    <>
      {characterList.map((character) => (
        <div key={character.id} className="caja">

          <h2>Nombre: {character.name}</h2>
          <h2>Estado: {character.status}</h2>
          <h2>Genero: {character.gender}</h2>
          <img src={character.image}></img>
   
        </div>
      ))}
    </>
  );
};

export default App;