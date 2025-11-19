import Link from "next/link";

interface PokemonProps {
  id: number;
  name: string;
  img: string;
  type: string;
}

export default async function Home() {
  const data = await fetch(
    "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json"
  );
  const response = await data.json();
  const pkm = response.pokemon;
  return (
    <div className="flex flex-col min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      {pkm.map((pokemon: PokemonProps) => {
        return (
          <Link href={`/${pokemon.name}`} key={pokemon.id}>
            <h1>{pokemon.name}</h1>
            <img src={pokemon.img}></img>
            <h1>{pokemon.type}</h1>
          </Link>
        );
      })}
    </div>
  );
}
