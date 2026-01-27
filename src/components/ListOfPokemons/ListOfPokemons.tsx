import { Link } from "react-router-dom"
import { usePokemons } from "../../hooks/fetchPokemons"
import { getPokemonIdFromUrl } from "../../hooks/getPokemonIdFromUrl"
import { getPokemonImageUrl } from "../../hooks/getPokemonImageUrl"

export const ListOfPokemons = () => {
  const { data, isLoading, error, fetchNextPage, hasNextPage, isFetchingNextPage } = usePokemons()

  return (
    <>
      <div className="flex flex-wrap justify-center gap-5">
        {isLoading &&
          <p>Carregando pokemons...</p>
        }

        {error &&
          <p>Ocorreu um erro ao buscar os pokemons...</p>
        }

        {data &&
          data.pages.map(page =>
            page.results.map((pokemon) => {
              const id = getPokemonIdFromUrl(pokemon.url)
              const imageUrl = getPokemonImageUrl(id)

              return (
                <div className="flex flex-col w-80 justify-center items-center bg-neutral-500 rounded-md" key={pokemon.name}>
                  <p className="text-center text-2xl">{pokemon.name}</p>
                  <img className="w-60" src={imageUrl} alt={pokemon.name} />
                  <Link key={id} to={`/pokemon/${id}`}>Saiba mais</Link>
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

