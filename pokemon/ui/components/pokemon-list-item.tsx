import Image from "next/image"
import { PokemonItem } from "@/hooks"
import { useGetFetch } from "@/hooks/useGetFetch"
import { Button } from "./button";

export type Pokemon = {
  name: string,
  id: string,
  weight: string,
  image: string,
  height: number
}

export function PokemonListItem({ pokemon }: { pokemon: PokemonItem }) {
  const { data: imageUrl } = useGetFetch<string>(
    pokemon.url,
    (response) => response.sprites.front_default
  );

  return (
    <div className="rounded-[15px] p-5 flex flex-col w-[300px] h-[300px] my-5 items-center">
      {imageUrl && <Image alt={pokemon.name} src={imageUrl} width={100} height={100} />}
      {pokemon.name}
      <Button label="Details" color="blue"  />
    </div>
  )
}
