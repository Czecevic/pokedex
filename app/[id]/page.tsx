import { GetPokemon } from "./components/getPokemon";

export default async function Pokemon() {
  const data = await fetch(
    "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
  );
  const response = await data.json();
  const pkm = response.pokemon;
  return (
    <div>
      <GetPokemon pkm={pkm} />
    </div>
  );
}
