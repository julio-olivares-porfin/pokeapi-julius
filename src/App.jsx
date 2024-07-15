import { Route, Routes } from "react-router-dom";
import PokeNavbar from "./components/Navigation";
import Home from "./layouts/Home";
import Pokemones from "./layouts/Pokemons";
import PokemonDetail from "./layouts/PokemonDetail";
import NotFound from "./layouts/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <PokeNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemones" element={<Pokemones />} />
          <Route path="/pokemones/:name" element={<PokemonDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
    </>
  );
}

export default App;
