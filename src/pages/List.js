import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import Link from "../components/Link";
import pokeball from "./pokeball.svg";

import Pager from "../Pager";

const List = () => {
  const [error, setError] = useState(null);
  const [pokemons, setPokemons] = useState([]);
  const [limit, setLimit] = useState(10);
  const [fetchURL, setFetchURL] = useState(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const [links, setLinks] = useState({
    previous: null,
    next: null,
  });
  const [filter, setFilter] = useState("");

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
        {[10, 20, 50, 100, -1].map((limit) => (
          <option key={limit} value={limit}>
            {limit > 0 ? `Show ${limit} pokemons` : "Show all pokemons"}
          </option>
        ))}
      </select>
      {limit === "-1" ? (
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" value={filter} onChange={(e) => setFilter(() => e.target.value)} />
        </form>
      ) : null}
      {error ? (
        <h3>{error}</h3>
      ) : pokemons.length > 0 ? (
        <ul style={{ listStyleImage: `url(${pokeball})` }}>
          {pokemons
            .filter((pokemon) => pokemon.name.includes(filter))
            .map((pokemon) => (
              <li key={pokemon.name}>
                <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
              </li>
            ))}
        </ul>
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
