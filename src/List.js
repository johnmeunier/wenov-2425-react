import { useEffect, useState } from "react";

import Pager from "./Pager";

const List = () => {
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(20);
  const [fetchURL, setFetchURL] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
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

  useEffect(() => {
    setFetchURL((currentUrl) => {
      const url = new URL(currentUrl);
      url.searchParams.set("limit", limit);
      return url.toString();
    });
  }, [limit]);

  return (
    <>
      <h2>Pokemon list</h2>
      <select value={limit} onChange={(e) => setLimit(e.target.value)}>
        {[10, 20, 50, 100].map((limit) => (
          <option key={limit} value={limit}>
            {limit}
          </option>
        ))}
      </select>
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
