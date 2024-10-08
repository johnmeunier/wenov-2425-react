import { useEffect, useState } from "react";

import Pager from "./Pager";

const List = () => {
  const [pokemons, setPokemons] = useState([]);
  const [fetchURL, setFetchURL] = useState("https://pokeapi.co/api/v2/pokemon");
  const [links, setLinks] = useState({
    previous: null,
    next: null,
  });
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(fetchURL);
      if (res.ok) {
        const { results, previous, next } = await res.json();
        setPokemons(results);
        setLinks(() => ({ previous, next }));
      } else {
        setError("An error occurred");
      }
    }
    fetchData();
  }, [fetchURL]);

  return (
    <>
      <h2>Pokemon list</h2>
      {error ? (
        <h3>{error}</h3>
      ) : pokemons.length > 0 ? (
        pokemons.map((pokemon) => <li key={pokemon.name}>{pokemon.name}</li>)
      ) : (
        <h3>Loading...</h3>
      )}
      {}
      <ul></ul>
      <Pager previous={links.previous} next={links.next} setFetchURL={setFetchURL} />
    </>
  );
};

export default List;
