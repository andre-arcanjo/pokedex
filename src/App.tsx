import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ListOfPokemons } from "./components/ListOfPokemons/ListOfPokemons";
import { PokemonDetails } from "./components/PokemonDetails/PokemonDetails";

function App() {

  return (
    <>
      <BrowserRouter basename="/Pokedex-API">
        <Routes>
          <Route path="/" element={<ListOfPokemons />} />
          <Route path="/pokemon/:id" element={<PokemonDetails />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
