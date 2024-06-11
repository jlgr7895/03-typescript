//const { httpClient } = require("../plugin");
import { httpClient } from "../plugin";

export const getPokemonById = async (id: string | number): Promise<string> => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const pokemon = await httpClient.get(url);

  return pokemon.name;
  // const response = await fetch(url);
  // const data = await response.json();
  // return data.name;

  // return fetch(url)
  //   .then((response) => response.json())
  //   .then((data) => data.name);
};

//module.exports = getPokemonById;
