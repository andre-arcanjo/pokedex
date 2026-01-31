import { Link, useParams } from "react-router-dom"
import { usePokemon } from "../../hooks/fetchPokemon";

export const PokemonDetails = () => {
    const { id } = useParams();
    const { data, isLoading, error } = usePokemon(id)

    return (
        <>
            <div className="w-screen h-screen flex items-center justify-center">
                {isLoading &&
                    <div>
                        <p>Buscando informações do pokemon...</p>
                    </div>
                }
                {error &&
                    <div className="flex flex-col gap-2 items-center">
                        <p>Erro ao buscar informações do pokemon. Clique no botão abaixo para voltar à página inicial.</p>
                        <button className="bg-neutral-500 w-40 h-10 rounded-md text-white hover:bg-neutral-700 transition-all">
                            <Link to="/">Página Inicial</Link>
                        </button>
                    </div>
                }
                {data &&
                    <div className="w-120 h-170 flex flex-col items-center justify-center gap-5 bg-neutral-500 rounded-lg text-center relative">
                        <Link to="/">
                            <img className="w-10 absolute left-[30px] top-[26px] hover:w-11 hover:transition-all" src="/Pokedex-API/seta.webp" alt="Voltar" />
                        </Link>
                        <p className="text-3xl font-semibold capitalize">{data.name}</p>
                        {data.sprites.other['official-artwork'].front_default &&
                            <img className="w-50" src={data.sprites.other['official-artwork'].front_default} alt={data.name} />}
                        <div>
                            <p className="font-semibold">Tipos:</p>
                            <ul>
                                {data.types.map(type => (
                                    <li key={type.type.name}>{type.type.name}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="font-semibold">Habilidades:</p>
                            <ul>
                                {data.abilities.map(hability => (
                                    <li key={hability.ability.name}>{hability.ability.name}</li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <p className="font-semibold">Movimentos:</p>
                            <ul>
                                {data.moves.slice(0, 5).map(move => (
                                    <li key={move.move.name}>
                                        {move.move.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                }
            </div>
        </>
    )
}