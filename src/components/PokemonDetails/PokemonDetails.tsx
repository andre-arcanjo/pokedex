import { Link, useParams } from "react-router-dom"
import { usePokemon } from "../../hooks/fetchPokemon";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { themeConfig } from "../../contexts/theme";

export const PokemonDetails = () => {
    const { id } = useParams();
    const { data, isLoading, error } = usePokemon(id)
    const { theme } = useContext(ThemeContext)

    return (
        <>
            <div className="w-screen h-screen flex items-center justify-center bg-[url('/Pokedex-API/light-mode.jpg')] bg-no-repeat bg-fixed bg-cover" style={{ backgroundImage: `url(${themeConfig[theme].layout.background})` }}>
                {isLoading &&
                    <div>
                        <p className={`${themeConfig[theme].layout.textColor}`}>Buscando informações do pokemon...</p>
                    </div>
                }
                {error &&
                    <div className={`flex flex-col gap-2 items-center ${themeConfig[theme].layout.textColor}`}>
                        <p>Erro ao buscar informações do pokemon. Clique no botão abaixo para voltar à página inicial.</p>
                        <button className={`${themeConfig[theme].layout.backgroundColor} w-40 h-10 rounded-md ${theme === 'light' ? 'hover:bg-neutral-800' : 'hover:bg-gray-800'} transition-all`}>
                            <Link to="/">Página Inicial</Link>
                        </button>
                    </div>
                }
                {data &&
                    <div className={`w-[90%] sm:w-120 h-165 flex flex-col items-center justify-center gap-5 ${themeConfig[theme].layout.textColor} ${themeConfig[theme].layout.backgroundColor} rounded-lg text-center relative opacity-[0.9]`}>
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