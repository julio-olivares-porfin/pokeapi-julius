import { Container } from "react-bootstrap"
import footerLogo from "../assets/pokedesafiologo.svg"

const Footer = () => {
  return (
    <div>
      <Container className="footer">
        <img src={footerLogo} alt="desafio poke api julio olivares" />
      </Container>
    </div>
  )
}

export default Footer
