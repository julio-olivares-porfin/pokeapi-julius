import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import homeImg from '../assets/ashpikachu.png'

function Home() {
  const navigate = useNavigate();

  const irAPokemones = () => {
    navigate("/pokemones");
  };

  return (
    <Container className="text-center mt-5 main">
      <div className="manifiesto-poke">
        <p>
        ¡Bienvenidos a nuestra Pokedex interactiva! Aquí, utilizando los datos más actualizados de la PokéAPI, podrás explorar y descubrir todo sobre tus Pokémon favoritos. ¿Quieres conocer las habilidades de Pikachu? ¿O tal vez la evolución de Charmander? Con solo unos clics, tendrás toda la información que necesitas.
        </p>
        <p>
        ¡Explora, aprende y conviértete en un verdadero Maestro Pokémon! ¡Haz clic en el botón a continuación y comienza tu viaje ahora!
        </p>
      </div>
      <div>
        <img src={homeImg} alt="poke api logo" width="20%"/>
      </div>
      <button className="ochobit-button" onClick={irAPokemones}>
        Empieza tu Aventura
      </button>
    </Container>
  );
}

export default Home;