import { useQuery } from "@tanstack/react-query"
import type { ListOfPokemons } from "../types/types"

export const fetchPokemons = async (limit: number, pageParam: number) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${pageParam}`)

    if(!response.ok) throw new Error('Erro ao buscar pokemons.')

    const data = await response.json()
    console.log(data)
    return data
}

export const getPokemonIdFromUrl = (url: string): string => {
    const parts = url.split("/")
    return parts[parts.length - 2]
}

export const getPokemonImageUrl = (id:string): string => {
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
}

export function usePokemons() {
    return useQuery<ListOfPokemons>({
        queryKey: ['pokemons'],
        queryFn: () => fetchPokemons(10,0)
    })
}
