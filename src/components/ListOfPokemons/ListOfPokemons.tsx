import { Link } from "react-router-dom"
import { usePokemons } from "../../hooks/fetchPokemons"
import { getPokemonIdFromUrl } from "../../hooks/getPokemonIdFromUrl"
import { getPokemonImageUrl } from "../../hooks/getPokemonImageUrl"
import { useContext } from "react"
import { themeConfig } from "../../contexts/theme"
import { ThemeContext } from "../../contexts/ThemeContext"

export const ListOfPokemons = () => {

  const { theme, toggleTheme } = useContext(ThemeContext)

  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = usePokemons()

  return (
    <>
      <div
        className="flex flex-wrap justify-center gap-5 bg-no-repeat bg-cover bg-fixed"
        style={{ backgroundImage: `url(${themeConfig[theme].layout.background})` }}
      >
        <div className="flex flex-col sm:flex-row justify-center items-center w-screen h-30 gap-4 px-4 py-6 sm:py-0 relative">
          <h1 className={`text-center text-3xl sm:text-4xl ${themeConfig[theme].layout.textColor} font-bold`}>Pokedex</h1>
          <button className={`${themeConfig[theme].layout.textColor} sm:absolute sm:right-8 ${themeConfig[theme].layout.backgroundColor} min-h-8 sm:min-h-10 w-36 sm:w-32 rounded-md cursor-pointer ${theme === 'light' ? 'hover:bg-neutral-800' : 'hover:bg-gray-800'} transition-all text-sm sm:text-base`} onClick={toggleTheme}>
            {theme === 'light' ? 'Tema Escuro 🌙' : 'Tema Claro ☀️'}
          </button>
        </div>
        {isLoading &&
          <p className={`${themeConfig[theme].layout.textColor}`}>Carregando pokemons...</p>
        }

        {error &&
          <div className={`flex flex-col gap-2 items-center ${themeConfig[theme].layout.textColor}`}>
            <p>Ocorreu um erro ao buscar os pokemons. Clique no botão abaixo para tentar novamente</p>
            <button className={`${themeConfig[theme].layout.backgroundColor} w-40 h-10 rounded-md ${theme === 'light' ? 'hover:bg-neutral-800' : 'hover:bg-gray-800'} transition-all`}>
              <Link to="/">Tentar novamente</Link>
            </button>
          </div>
        }

        {data &&
          data.pages.map(page =>
            page.results.map((pokemon) => {
              const id = getPokemonIdFromUrl(pokemon.url)
              const imageUrl = getPokemonImageUrl(id)

              return (
                <div>
                  <Link key={id} to={`/pokemon/${id}`}>
                    <div className={`flex flex-col w-70 gap-2 justify-center items-center rounded-md ${themeConfig[theme].layout.backgroundColor} ${theme === 'light' ? 'hover:bg-neutral-800' : 'hover:bg-gray-800'} hover:transition-all opacity-[0.9]`} key={pokemon.name}>
                      <p className={`text-center ${themeConfig[theme].layout.textColor} text-2xl capitalize`}>{pokemon.name}</p>
                      <img className="w-50" src={imageUrl} alt={pokemon.name} />
                    </div>
                  </Link>
                </div>
              )
            }
            ))

        }
        {hasNextPage && (
          <div className="w-full h-10 flex justify-center items-center p-10">
            <button className={`${themeConfig[theme].layout.backgroundColor} ${themeConfig[theme].layout.textColor} w-40 h-10 rounded-md ${theme === 'light' ? 'hover:bg-neutral-800' : 'hover:bg-gray-800'} hover:transition-all`} onClick={() => fetchNextPage()}>
              {isFetchingNextPage ? 'Carregando...' : 'Carregar mais'}
            </button>
          </div>
        )}
      </div>
    </>
  )
}

