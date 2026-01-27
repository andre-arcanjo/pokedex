import { useParams } from "react-router-dom"
import { usePokemon } from "../../hooks/fetchPokemon";

export const PokemonDetails = () => {
    const { id } = useParams();
    const { data, isLoading, error } = usePokemon(id)

    return (
        <>
            {isLoading &&
                <div>
                    <p>Buscando informações dos pokemons...</p>
                </div>
            }
            {error &&
                <div>
                    <p>Erro ao buscar informações dos pokemons...</p>
                </div>
            }
            {data &&
                <div>
                    <p>Nome:{data.name}</p>
                    {data.sprites.other['official-artwork'].front_default &&
                    <img src={data.sprites.other['official-artwork'].front_default} alt={data.name} />}
                    <div>
                        <p>Tipos:</p>
                        {data.types.map(type => (
                            <p key={type.type.name}>{type.type.name}</p>
                        ))}
                    </div>
                    
                    <div>
                        <p>Habilidades:</p>
                        {data.abilities.map(hability => (
                            <p key={hability.ability.name}>{hability.ability.name}</p>
                        ))}
                    </div>
                    <div>
                        <p>Movimentos:</p>
                        {data.moves.slice(0,5).map(move => (
                            <p key={move.move.name}>
                                {move.move.name}
                            </p>
                        ))}
                    </div>
                </div>
            }
        </>
    )
}