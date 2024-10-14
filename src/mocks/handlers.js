// handlers.js
import { http, HttpResponse } from "msw";
import getPokemon from "./fixtures/getPokemon.json";
export const handlers = [
  http.get("https://pokeapi.co/api/v2/pokemon", async () => HttpResponse.json(getPokemon, { status: 200 })),
];
