import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import homeImg from '../assets/ashpikachu.png'

function Home() {
  const navigate = useNavigate();

  const irAPokemones = () => {
    navigate("/pokemones");
  };

  return (
    <Container className="text-center mt-5">
      <div>
        <img src={homeImg} alt="poke api logo" width="20%"/>
      </div>
      <button className="home-button" onClick={irAPokemones}>
        Buscar un pokemon
      </button>
    </Container>
  );
}

export default Home;