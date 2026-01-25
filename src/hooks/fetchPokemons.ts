import { useInfiniteQuery } from "@tanstack/react-query"
import type { ListOfPokemons } from "../types/types"

export const fetchPokemons = async (limit: number, pageParam: unknown) => {
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
    return useInfiniteQuery<ListOfPokemons>({
        queryKey: ['pokemons'],
        initialPageParam: 0,
        queryFn: ({pageParam}) => fetchPokemons(10,pageParam),
        getNextPageParam: (lastPage, allPages) => {
            if(!lastPage.next) return undefined

            return allPages.length * 10
        }
    })
}
