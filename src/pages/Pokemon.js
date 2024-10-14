import { useEffect, useState } from "react";
import { useAtom } from "jotai";
// import { useParams } from "react-router-dom";

const Pokemon = () => {
  // const { name } = useParams();
  const [name] = useState(/^\/pokemon\/([a-z]+)$/.exec(window.location.pathname)[1]);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      if (res.ok) {
        const data = await res.json();
        setPokemon(data);
      }
    }
    fetchData();
  }, []);

  return pokemon ? (
    <>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt="" />
    </>
  ) : (
    <h2> Loading ...</h2>
  );
};

export default Pokemon;
