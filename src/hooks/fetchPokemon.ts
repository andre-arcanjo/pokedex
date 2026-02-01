import { useQuery } from "@tanstack/react-query";
import type { PokemonDetail } from "../types/types";

export const fetchPokemon = async (id:string | undefined) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

    if(!response.ok) throw new Error('Erro ao buscar detalhes do pokemon');
    
    const data = await response.json();
    return data;
}

export function usePokemon(id:string | undefined) {
    return useQuery<PokemonDetail>({
        queryKey: ['pokemon',id],
        queryFn: () => fetchPokemon(id),
        enabled: !!id
    })
} 