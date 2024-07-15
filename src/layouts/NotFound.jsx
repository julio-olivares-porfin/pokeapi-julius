import { Container } from "react-bootstrap"
import notFoundImg from "../assets/MissingNO.webp"

const NotFound = () => {
  return (
    <Container>
      <img src={notFoundImg} alt="missing no." />
    </Container>
  )
}

export default NotFound
