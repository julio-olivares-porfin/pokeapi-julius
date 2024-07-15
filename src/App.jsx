import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer"
import PokeNavbar from "./components/Navigation";
import Home from "./layouts/Home";
import Pokemones from "./layouts/Pokemons";
import PokemonDetail from "./layouts/PokemonDetail";
import NotFound from "./layouts/NotFound";

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
        <Footer />
    </>
  );
}

export default App;
