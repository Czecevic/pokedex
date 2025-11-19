"use client";
import { useParams } from "next/navigation";

export const GetPokemon = ({ pkm }) => {
  const router = useParams();
  const pkmProfile = pkm.filter((pokemon) => pokemon.name === router.id);
  //   console.log(pkmProfile);
  return (
    <div>
      {pkmProfile.map((elemPkm) => {
        return (
          <div>
            <h1>{elemPkm.name}</h1>
            <img src={elemPkm.img} />
          </div>
        );
      })}
    </div>
  );
};
