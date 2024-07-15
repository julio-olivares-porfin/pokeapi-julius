import { Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom";
import notFoundImg from "../assets/MissingNO.webp"


const NotFound = () => {
  const navigate = useNavigate();

  const irAPokemones = () => {
    navigate("/pokemones");
  };
  return (
    <Container className="main">
      <h2>
        No se encuentra el sitio
      </h2>
      <img src={notFoundImg} alt="missing no." />
      <button className="ochobit-button-small" onClick={irAPokemones}>
        volver al home
      </button>
    </Container>
  )
}

export default NotFound
