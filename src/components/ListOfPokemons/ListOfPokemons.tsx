import { Link } from "react-router-dom"
import { usePokemons } from "../../hooks/fetchPokemons"
import { getPokemonIdFromUrl } from "../../hooks/getPokemonIdFromUrl"
import { getPokemonImageUrl } from "../../hooks/getPokemonImageUrl"

export const ListOfPokemons = () => {
  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = usePokemons()

  return (
    <>
      <div className="flex flex-wrap justify-center gap-5">
        <div className="flex justify-center items-center w-screen h-30">
          <h1 className="text-center text-4xl">Pokedex</h1>
        </div>
        {isLoading &&
          <p>Carregando pokemons...</p>
        }

        {error &&
          <div className="flex flex-col gap-2 items-center">
            <p>Ocorreu um erro ao buscar os pokemons. Clique no botão abaixo para tentar novamente</p>
            <button className="bg-neutral-500 w-40 h-10 rounded-md text-white hover:bg-neutral-700 transition-all">
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
                    <div className="flex flex-col w-70 gap-2 justify-center items-center bg-neutral-500 rounded-md hover:bg-neutral-700 hover:transition-all" key={pokemon.name}>
                      <p className="text-center text-2xl capitalize">{pokemon.name}</p>
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
            <button className="bg-neutral-500 w-40 h-10 rounded-md hover:bg-neutral-700" onClick={() => fetchNextPage()}>
              {isFetchingNextPage ? 'Carregando...' : 'Carregar mais'}
            </button>
          </div>
        )}
      </div>
    </>
  )
}

