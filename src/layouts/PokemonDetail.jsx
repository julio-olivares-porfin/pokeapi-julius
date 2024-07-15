import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Card, Row, Col } from "react-bootstrap";
import PokeLoader from "../components/PokeLoader";

const POKEMONS_URL = "https://pokeapi.co/api/v2/pokemon";

async function getPokemon(name, setPokemon, setLoading) {
  const res = await fetch(`${POKEMONS_URL}/${name}`);
  const data = await res.json();
  setPokemon(data);
  setLoading(false);
}

function DetallePokemon() {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const irAPokemones = () => {
    navigate("/pokemones");
  };

  useEffect(() => {
    getPokemon(name, setPokemon, setLoading);
  }, [name]);

  if (loading) {
    return <PokeLoader />;
  }

  return (
    <Container className="mt-5 text-center">
      <h1>Detalle Pokemon</h1>
      <Card className="p-3 poke-card">
        <Row>
          <Col md={6}>
            <Card.Img
              className="pokemon-img"
              src={pokemon.sprites.versions['generation-v']['black-white'].animated.front_default}
            />
          </Col>
          <Col md={6}>
            <Card.Body className="text-start">
              <Card.Title className="fw-bolder">{pokemon.name}</Card.Title>
              <ul>
                <Card.Text>
                  {pokemon.stats.map((stat) => (
                    <li key={stat.stat.name}>
                      {stat.stat.name}: {stat.base_stat}
                    </li>
                  ))}
                </Card.Text>
                <br />
                <Card.Title className="fw-bold">Type:</Card.Title>
                <Card.Text>
                  {pokemon.types.map((type) => (
                    <li key={type.type.name}>
                      {type.type.name}
                    </li>
                  ))}
                </Card.Text>
              </ul>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <button className="btn btn-secondary mt-4" onClick={irAPokemones}>
        Volver a buscar un pokemon
      </button>
    </Container>
  );
}

export default DetallePokemon;
