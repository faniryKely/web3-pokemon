"use client"

import { useGetPokemons } from "@/hooks";
import { Button } from "@/ui/components";
import { PokemonListItem } from "@/ui/components/pokemon-list-item";

export default function ClientList() {
  const {
    page,
    pokemons,
    fetchNextPage,
    fetchPrevPage,
  } = useGetPokemons();

  return (
    <div>
      <p className="text-xl font-bold text-center my-5">Page {page + 1}</p>
      <div className="flex items-center gap-5 justify-center">
        <Button label="Next Page" color="blue" onClick={fetchNextPage} />
        {page > 0 && <Button label="Prev Page" color="green" onClick={fetchPrevPage} />}
      </div>
      <div className="container flex items-center gap-5 flex-wrap w-full mx-auto">
        {pokemons.map((pokemon) => <PokemonListItem key={pokemon.name} pokemon={pokemon} />)}
      </div>
    </div>
  )
}
