import { usePokemons } from "./hooks/fetchPokemons"
import { getPokemonIdFromUrl, getPokemonImageUrl } from "./hooks/fetchPokemons"

function App() {

  const { data, isLoading, error } = usePokemons()

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
          data.results.map(pokemon => {
            const id = getPokemonIdFromUrl(pokemon.url)
            const imageUrl = getPokemonImageUrl(id)

            return (
              <div className="flex flex-col w-80 justify-center items-center bg-neutral-500 rounded-lg" key={pokemon.name}>
                <p className="text-center text-2xl">{pokemon.name}</p>
                <img className="w-60" src={imageUrl} alt={pokemon.name} />
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default App
