import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PokeLoader from "../components/PokeLoader";

const POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon";

async function obtenerPokemones(offset, limit, setPokemones, setLoading) {
  const res = await fetch(`${POKEMONS_URL}?offset=${offset}&limit=${limit}`);
  const data = await res.json();
  setPokemones(data.results);
  setLoading(false);
}

function Pokemones() {
  const [pokemones, setPokemones] = useState([]);
  const [seleccionado, setSeleccionado] = useState();
  const [loading, setLoading] = useState(true);
  const limit = 20; //resultados por pagina
  const [offset, setOffset] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    obtenerPokemones(offset, limit, setPokemones, setLoading);
  }, [offset]);

  if (loading) {
    return <PokeLoader />;
  }

  console.log("pokemones-->", pokemones);
  console.log("seleccionado-->", seleccionado);

  const irAPokemonDetalle = () => {
    if (seleccionado) {
      console.log("dentro if");
      navigate(`/pokemones/${seleccionado}`);
    } else {
      console.log("dentro else");
      alert("Debes seleccionar un pokemon");
    }
  };

  const handleNextPage = () => {
    if (offset < 1300) {
      setOffset(offset + limit); // Aumentar el valor del offset para la siguiente página
    }
  };

  const handlePrevPage = () => {
    if (offset > 0) {
      setOffset(offset - limit); // Disminuir el valor del offset para la página anterior
    }
  };

  const handleSelect = (e) => {
    setSeleccionado(e.target.value);
  };

  const rangeStart = offset + 1;
  const rangeEnd = offset + pokemones.length;
  console.log("rangeEnd", rangeEnd);
  console.log("typeOf rangeEnd", typeof rangeEnd);
  console.log("offset", offset);
  console.log("typeOff offset", typeof offset);

  return (
    <div>
      <div className="d-flex flex-column align-items-center justify-content-center main">
        <h1>Selecciona un Pokemon</h1>
        <select className="m-3" onChange={handleSelect}>
          <option hidden>Selecciona un pokemon</option>
          {pokemones.map((pokemon) => {
            return (
              <option key={pokemon.id} value={pokemon.name}>
                {pokemones.indexOf(pokemon) + 1} -{" "}
                {pokemon.name[0].toUpperCase() + pokemon.name.substr(1)}
              </option>
            );
          })}
        </select>
        <button className="ochobit-button-small" onClick={irAPokemonDetalle}>
          Ver Detalle
        </button>
      </div>
      <br />
      <div className="pagination d-flex justify-content-center align-items-center">
        <button className="ochobit-button-small-v2" onClick={handlePrevPage} disabled={offset === 0}>
          Anterior
        </button>
        <span className="p-2">{`${rangeStart}-${rangeEnd}`}</span>
        <button className="ochobit-button-small-v2" onClick={handleNextPage} disabled={offset === 1300}>
          Siguiente
        </button>
      </div>
    </div>
  );
}

export default Pokemones;
